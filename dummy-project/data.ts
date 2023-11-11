import {RiComputerLine, RiDatabaseLine, RiYoutubeLine} from 'react-icons/ri';
import {CgBrowser, CgGym} from "react-icons/cg";

import {Service} from "@/types";

export const services: Service[] = [
    {
        title: 'Frontend Dev',
        description: 'I can build a beautiful and scalable WebApps using <React />, <Next.js /> and <Gatsby />',
        icon: RiComputerLine
    },
    {
        title: 'Backend Dev',
        description: 'Handle database, server, api using <Express />, <Nest.js /> and <Django />',
        icon:  RiDatabaseLine
    },
    {
        title: 'Web Automations Dev',
        description: 'I can automate your daily tasks using <Requests />, <Selenium />, <Puppeteer />, <BeautifulSoup /> and many more!',
        icon: CgBrowser
    },
    {
        title: 'Automations Dev',
        description: 'I automate everything, but the most interesting endevour is to automate video & content creation.',
        icon: CgBrowser
    },
    {
        title: 'Content Creator',
        description: 'I create content about programming, life, and everything a programmer needs on their self improvement journey.',
        icon: RiYoutubeLine
    },
    {
        title: 'Competitive Person',
        description: 'I love to compete, and I love to win. I am a competitive person, and I love to compete with myself, by setting the highest standards for myself.',
        icon: CgGym
    }
]