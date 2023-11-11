import React from 'react'

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
        {/* Education */}
        {/* language & tools */}
        </div>
    )
}
export default Resume
