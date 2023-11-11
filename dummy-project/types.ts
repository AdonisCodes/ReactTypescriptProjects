import {IconType} from "react-icons";

export interface Service {
    title: string;
    description: string;
    icon: IconType;
}

export interface Skill {
    name: string;
    level: string;
    icon: IconType;
}