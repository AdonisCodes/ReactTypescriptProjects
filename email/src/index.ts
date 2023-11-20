// This script will be a simple server, callable with a secure token, to send emails.
// This server will also have a worker to check every 5 minutes if there are any new
// emails in the database to send.

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import PocketBase from 'pocketbase';
import {sendEmail} from "./utils";

const pb = new PocketBase('https://vidi.pockethost.io');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
   // Route to send a template from src/templates/index.html
    return res.sendFile(__dirname + '/templates/index.html');
});

app.post('/send', async (req, res) => {
    // Route to send email ( With flags depending on the address )
    // Get the json from the request, the token will be 'token' in the json
    const token = req.body.token;

    // Check if the token is valid
    if (token != process.env.TOKEN) {
        return res.status(401).send('Unauthorized');
    }

    // Get the email from the json
    const email = req.body.email;
    const subject = req.body.subject;
    const text = req.body.text;

    if (!email) {
        // Get all emails from the database
        const records = await pb.collection('emails').getFullList({
            sort: '-created',
        });

        for (const record of records) {
            await sendEmail(record.email, subject, text);
        }
    }
});

