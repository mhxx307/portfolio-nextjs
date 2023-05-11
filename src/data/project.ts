import { AiOutlineGithub } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';
import { TbWorld } from 'react-icons/tb';

// projects data
export const projects = [
    {
        id: 1,
        name: 'Wordle Clone',
        desc: 'A game that gives you 5 attempts to guess the correct word of the day',
        stack: 'REACT JS, TYPESCRIPT, TAILWIND CSS, REDUX TOOLKIT',
        gitHubUrl: {
            icon: AiOutlineGithub,
            url: 'https://github.com/mhxx307/wordle',
        },
        website: {
            icon: TbWorld,
            url: 'https://mhxx307.github.io/wordle/',
        },
        imgUrl: '/images/wordle.png',
    },
    {
        id: 2,
        name: 'Travel website',
        desc: 'A Responsive travel website design',
        stack: 'html/css, javascript',
        gitHubUrl: {
            icon: AiOutlineGithub,
            url: 'https://github.com/mhxx307/summer-holiday',
        },
        website: {
            icon: TbWorld,
            url: 'https://mhxx307.github.io/summer-holiday/',
        },
        imgUrl: '/images/travel.png',
    },
    {
        id: 3,
        name: 'Youtube Clone',
        desc: 'This is an youtube clone project with api from rapidApi',
        stack: 'React JS, Material UI',
        imgUrl: '/images/youtube.png',
        gitHubUrl: {
            icon: AiOutlineGithub,
            url: 'https://github.com/mhxx307/youtube-clone',
        },
        website: {
            icon: TbWorld,
            url: 'https://minhquan-youtube-clone.netlify.app/',
        },
    },
    {
        id: 4,
        name: 'Blog app',
        desc: 'A complicated project that enhanced my skills a lot, blog app with CRUD function (MERN)',
        stack: 'React JS, MongoDB, Express, NodeJS, SCSS',
        gitHubUrl: {
            icon: AiOutlineGithub,
            url: 'https://github.com/mhxx307/blog-app',
        },
        website: {
            icon: TbWorld,
            url: 'https://minhquan-blogapp.netlify.app/',
        },
        imgUrl: '/images/blogapp.png',
    },

    {
        id: 5,
        name: 'Reddit clone',
        desc: 'A complicated project that help me learn a lot about new technologies',
        stack: 'Next JS, TypeScript, Tailwind CSS, Supabase, Stepzen, Vercel',
        gitHubUrl: {
            icon: AiOutlineGithub,
            url: 'https://github.com/mhxx307/reddit-clone',
        },
        website: {
            icon: TbWorld,
            url: 'https://reddit-clone-mhxx307.vercel.app/',
        },
        imgUrl: '/images/reddit.png',
    },
    // {
    //     id: 6,
    //     name: 'Huddle Landing Page',
    //     desc: 'A simple landing page website',
    //     stack: 'React js, SCSS',
    //     gitHubUrl: {
    //         icon: AiOutlineGithub,
    //         url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
    //     },
    //     website: {
    //         icon: TbWorld,
    //         url: 'https://huddle-website-project.netlify.app/',
    //     },
    //     imgUrl: huddle,
    // },
    // {
    //     id: 7,
    //     name: 'Hotel Booking Project',
    //     desc: 'A complicated project that enhanced my skills a lot',
    //     stack: 'React JS',
    //     gitHubUrl: {
    //         icon: AiOutlineGithub,
    //         url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    //     },
    //     website: {
    //         icon: TbWorld,
    //         url: 'https://react-booking-project.netlify.app/',
    //     },
    //     imgUrl: 'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265f9a4adbd54644841930518a1.png?compress=1&resize=320x240&vertical=top',
    // },
    // {
    //     id: 8,
    //     name: 'Restaurant Website',
    //     desc: 'A Responsive restaurant website design with great UI Effect',
    //     stack: 'React JS',
    //     gitHubUrl: {
    //         icon: AiOutlineGithub,
    //         url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
    //     },
    //     website: {
    //         icon: TbWorld,
    //         url: 'https://gericht-restaurant-website.netlify.app/',
    //     },
    //     imgUrl: gericht,
    // },
];

export interface ProjectType {
    id: number;
    name: string;
    desc: string;
    stack: string;
    gitHubUrl: {
        icon: IconType;
        url: string;
    };
    website: {
        icon: IconType;
        url: string;
    };
    imgUrl: string;
}
