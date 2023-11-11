import {RiComputerLine, RiDatabaseLine, RiYoutubeLine} from 'react-icons/ri';
import {CgBrowser, CgGym} from "react-icons/cg";

import {Service} from "@/types";

export const services: Service[] = [
    {
        title: 'Frontend Dev',
        description: 'I can build a beautiful and scalable WebApps.',
        icon: RiComputerLine
    },
    {
        title: 'Backend Dev',
        description: 'I build the logic behind the scenes.',
        icon:  RiDatabaseLine
    },
    {
        title: 'Web Automations Dev',
        description: 'I automate anything web, because data is the new oil.',
        icon: CgBrowser
    },
    {
        title: 'Automations Dev',
        description: 'I automate anything, content creation, data entry, and more.',
        icon: CgBrowser
    },
    {
        title: 'Content Creator',
        description: 'I create content about programming, life, and everything in between.',
        icon: RiYoutubeLine
    },
    {
        title: 'Competitive Person',
        description: 'I love to compete, it brings the best out of me, and enjoyment for others!',
        icon: CgGym
    }
]