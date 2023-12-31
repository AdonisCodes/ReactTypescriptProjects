import React from 'react'
import {Skill} from "@/types";

type BarProps = {
    data: Skill
}

const Bar = ({data}: BarProps) => {
    return (
        <div className={'my-2 text-white bg-gray-200 rounded-full'}>
            <div className={'px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600'} style={{width: data.level}}>
                <data.icon className={'mr-3'} />
                {data.name}
            </div>
        </div>
    )
}
export default Bar
