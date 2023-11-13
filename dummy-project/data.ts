import {RiComputerLine, RiDatabaseLine, RiYoutubeLine} from 'react-icons/ri';
import {CgBrowser, CgGym} from "react-icons/cg";

import {Service, Skill} from "@/types";
import {FaDocker, FaJs, FaKeyboard, FaPython} from "react-icons/fa";
import {SiJetbrains, SiTypescript} from "react-icons/si";
import {FaGolang} from "react-icons/fa6";

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


export const languages: Skill[] = [
    {
        name: 'Python',
        level: '100%',
        icon: FaPython
    },
    {
        name: 'TypeScript',
        level: '100%',
        icon: SiTypescript
    },
    {
        name: 'GO',
        level: '50%',
        icon: FaGolang
    },
    {
        name: 'C',
        level: '80%',
        icon: CgBrowser
    },
    {
        name: 'Scala',
        level: '50%',
        icon: CgBrowser
    }
]

export const tools: Skill[] = [
    {
        name: 'Jetbrains IDEs',
        level: '100%',
        icon: SiJetbrains
    },
    {
        name: 'Git',
        level: '100%',
        icon: CgBrowser
    },
    {
        name: 'Typist',
        level: '100%',
        icon: FaKeyboard
    },
    {
        name: 'Docker & KUB',
        level: '60%',
        icon: FaDocker
    },
    {
        name: 'More',
        level: '100%',
        icon: CgBrowser
    }
]