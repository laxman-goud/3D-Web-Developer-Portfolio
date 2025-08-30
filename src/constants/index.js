import { li } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    expressjs,
    nextjs,
    meta,
    starbucks,
    tesla,
    shopify,
    nike,
    notesapp,
    spotify,
    github
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "MERN Stack Developer",
        icon: mobile,
    },
    {
        title: "Open Source Contributor",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Express JS",
        icon: expressjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "github",
        icon: github,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Notes App",
        description:
            "A full-stack Notes application developed using Node.js, Express, MongoDB, and EJS. It includes Google OAuth authentication, note creation and management, search, pagination, and session handling, offering users a secure, organized, and efficient experience for storing, accessing, and managing their notes online.",
        tags: [
            {
                name: "expressjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "ejs",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "blue-text-gradient",
            },
        ],
        image: notesapp,
        source_code_link: "https://github.com/laxman-goud/notes-app",
        live_link: "https://nodenote.up.railway.app/",
    },
    {
        name: "Nike Landing Page",
        description:
            "A modern and responsive Nike landing page built using React, Vite, and Tailwind CSS. It highlights dynamic layouts, clean UI components, and mobile-first responsiveness, delivering a sleek e-commerce showcase that reflects professional design practices and front-end development skills effectively.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
        ],
        image: nike,
        source_code_link: "https://github.com/laxman-goud/nike_landing_page",
        live_link: "https://nike-landing-page-tan-delta.vercel.app/",
    },
    {
        name: "Spotify Clone",
        description:
            "A responsive Spotify-inspired music streaming web app built with HTML, CSS, and JavaScript. It replicates Spotify’s look and feel, letting users browse curated albums by mood, preview covers, and play tracks with a functional player for an engaging music experience.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: spotify,
        source_code_link: "https://github.com/laxman-goud/Spotify-Clone",
        live_link: "https://spotify-clone-pi-bay.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };