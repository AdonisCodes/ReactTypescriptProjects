import React from 'react'
import {languages, tools} from "@/data";
import Bar from "@/components/Bar";

const Resume = () => {
    return (
        <div className={'p-4'}>
            <div className={'grid gap-6 md:grid-cols-2'}>
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>Education</h5>
                    <div>
                        <h5 className={'my-2 text-xl font-bold'}>Computer Science & Engineering</h5>
                        <p className={'font-semibold'}>Currently pursuing AI & Automations dev ( As a freelancer )</p>
                        <p className={'my-3'}>Have no prior education - except high school & free online learning material -.</p>
                    </div>
                </div>
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>Experiences</h5>
                    <div>
                        <h5 className={'my-2 text-xl font-bold'}>Freelance developer</h5>
                        <p className={'font-semibold'}>Am working on platforms like fiverr, upwork & on my own project <a href={'https://vidi.simonferns.com'} target={'_blank'}>vidi</a></p>
                    </div>
                </div>
            </div>
        {/* language & tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>
                        Languages & Frameworks
                    </h5>
                        <div className={'my-2'}>
                            {
                                languages.map((language, i) => (
                                        <Bar data={language} key={language.name}/>
                                ))
                            }
                        </div>
                </div>
                <div>
                    <h5 className={'my-3 text-xl font-bold'}>
                        Tools & Software
                    </h5>
                    <div className={'my-2'}>
                        {
                            tools.map((tool, i) => (
                                        <Bar data={tool} key={tool.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume
