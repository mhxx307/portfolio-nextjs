import { FiGrid, FiLinkedin, FiYoutube, FiFigma } from 'react-icons/fi';
import { ImBlogger } from 'react-icons/im';
import { VscProject } from 'react-icons/vsc';
import {
    BsBootstrapFill,
    BsPersonLinesFill,
    BsGithub,
    BsGoogle,
} from 'react-icons/bs';

import { RiContactsLine, RiReactjsLine } from 'react-icons/ri';
import {
    SiFuturelearn,
    SiSass,
    SiJquery,
    SiExpress,
    SiRedux,
} from 'react-icons/si';

import { GrGithub, GrTwitter, GrInstagram } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { IoLogoJavascript, IoLogoGameControllerB } from 'react-icons/io';
import { FaNodeJs, FaGit } from 'react-icons/fa';

const sideBarMenu = [
    {
        text: 'Home',
        icon: FiGrid,
        url: '/',
    },
    {
        text: 'About',
        icon: BsPersonLinesFill,
        url: '/about',
    },
    {
        text: 'Projects',
        icon: VscProject,
        url: '/project',
    },
    {
        text: 'Blog',
        icon: ImBlogger,
        url: '/blog',
    },
    {
        text: 'Contacts',
        icon: RiContactsLine,
        url: '/contact',
    },
    {
        text: 'Tutorials',
        icon: SiFuturelearn,
        url: '/tutorial',
    },
    {
        text: 'Gaming',
        icon: IoLogoGameControllerB,
        url: '/gaming',
    },
];

// social media icons
const socialIcons = [
    {
        icon: GrGithub,
        url: 'https://github.com/Almarex-Web-Dev ',
    },
    {
        icon: FiYoutube,
        url: 'https://www.youtube.com/c/AlmarexWebDev',
    },
    {
        icon: GrTwitter,
        url: 'https://twitter.com/almarexwebdev',
    },
    {
        icon: GrInstagram,
        url: 'https://www.instagram.com/almarexwebdev1/',
    },
    {
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/in/almarex/',
    },
];
// skills card
const skillSet = [
    {
        icon: AiFillHtml5,
        spanText: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        icon: DiCss3,
        spanText: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        icon: IoLogoJavascript,
        spanText: 'JAVASCRIPT',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
    },
    {
        icon: SiSass,
        spanText: 'SASS',
        url: '',
    },

    {
        icon: BsBootstrapFill,
        spanText: 'BOOTSTRAP',
        url: '',
    },

    {
        icon: SiJquery,
        spanText: 'JQUERY',
        url: '',
    },
    {
        icon: FaGit,
        spanText: 'GIT',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
    },
    {
        icon: BsGithub,
        spanText: 'GITHUB',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
    },
    {
        icon: RiReactjsLine,
        spanText: 'REACT JS',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
    },

    {
        icon: FaNodeJs,
        spanText: 'NODE',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
    },

    {
        icon: DiMongodb,
        spanText: 'MONGO DB',
        url: '',
    },
    {
        icon: SiExpress,
        spanText: 'EXPRESS JS',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
    },
    {
        icon: SiRedux,
        spanText: 'Redux',
        url: 'https://redux.js.org/introduction/getting-started',
    },
    {
        icon: FiFigma,
        spanText: 'Figma',
        url: 'https://figma.com',
    },
    {
        icon: BsGoogle,
        spanText: 'Googling',
        url: 'https://google.com',
    },
];

export { sideBarMenu, socialIcons, skillSet };
