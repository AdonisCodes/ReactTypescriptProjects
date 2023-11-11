import React from 'react'
import {Service} from "@/types";

type ServiceCardProps = {
    service: Service
}
const ServiceCard = ({service:{title,description,icon: Icon}}: ServiceCardProps) => {
    return (
        <div className={'p-2 flex items-center space-x-4'}>
            <Icon className={"w-12 h-12 text-green"}/>
            <div>
                <h4 className={'font-bold'}>{title}</h4>
                <p style={{fontSize: '12px'}}>{description}</p>
            </div>
        </div>
    )
}
export default ServiceCard
