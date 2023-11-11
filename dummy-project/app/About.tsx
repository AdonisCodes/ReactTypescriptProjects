'use client'
import React from 'react'
import {services} from "@/data";

const About = () => {

    return (
        <>
            <h5>
                I am currently pursuing on becoming a freelance developer.
                I am a self-taught developer and I am always looking for new opportunities to learn and grow.
                I am currently learning React, NextJS, Scala, Python & Go.
            </h5>
            <div>
                <h6>
                    What I offer
            </h6>
                <div>
                    {
                        services.map(service => (
                            <></>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default About
