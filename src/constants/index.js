/**
 * constants/index.js
 * ---------------------------------------
 * Centralized data for portfolio sections:
 * - navLinks: Navigation menu items
 * - services: Roles/services offered
 * - technologies: Tech stack icons
 * - experiences: Work experience timeline
 * - testimonials: Client feedback
 * - projects: Featured project showcase
 *
 * This file imports assets from /src/assets and
 * provides structured arrays for rendering in the UI.
 */

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
    github,
} from "../assets";

/** Navigation links for the navbar */
export const navLinks = [
    { id: "about", title: "About" },
    { id: "works", title: "Works" },
    { id: "contact", title: "Contact" },
];

/** Services / roles offered */
const services = [
    { title: "Frontend Developer", icon: web },
    { title: "Backend Developer", icon: backend },
    { title: "MERN Stack Developer", icon: mobile },
    { title: "Open Source Contributor", icon: creator },
];

/** Technologies used (stack logos) */
const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Express JS", icon: expressjs },
    { name: "Next JS", icon: nextjs },
    { name: "git", icon: git },
    { name: "github", icon: github },
];

/** Work experience timeline */
const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web apps with React.js.",
            "Collaborating with designers, PMs, and dev teams.",
            "Ensuring responsive design and cross-browser compatibility.",
            "Code reviews and providing feedback.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Built and maintained apps with React.js & React Native.",
            "Worked with cross-functional teams on quality products.",
            "Responsive design and browser/device compatibility.",
            "Participated in code reviews and collaboration.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developed Shopify-based web apps with React.js.",
            "Collaborated with designers and backend engineers.",
            "Implemented mobile-first responsive layouts.",
            "Provided constructive feedback during reviews.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Full-stack web app development with MERN stack.",
            "Collaboration with design & product teams.",
            "Optimized apps for responsiveness and performance.",
            "Active participation in code reviews.",
        ],
    },
];

/** Client testimonials */
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

/** Featured portfolio projects */
const projects = [
    {
        name: "Notes App",
        description:
            "Full-stack notes app with Node.js, Express, MongoDB & EJS. Supports Google OAuth, CRUD, search, pagination, and secure session handling.",
        tags: [
            { name: "expressjs", color: "blue-text-gradient" },
            { name: "mongodb", color: "green-text-gradient" },
            { name: "ejs", color: "pink-text-gradient" },
            { name: "bootstrap", color: "blue-text-gradient" },
        ],
        image: notesapp,
        source_code_link: "https://github.com/laxman-goud/notes-app",
        live_link: "https://notes-app-p8om.onrender.com/",
    },
    {
        name: "Nike Landing Page",
        description:
            "Responsive Nike landing page with React, Vite, and Tailwind CSS. Features dynamic layouts, clean UI, and mobile-first responsiveness.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "tailwindcss", color: "green-text-gradient" },
        ],
        image: nike,
        source_code_link: "https://github.com/laxman-goud/nike_landing_page",
        live_link: "https://nike-landing-page-tan-delta.vercel.app/",
    },
    {
        name: "Spotify Clone",
        description:
            "Spotify-inspired music web app using HTML, CSS, and JS. Browse curated albums, preview covers, and play tracks with a functional player.",
        tags: [
            { name: "html", color: "blue-text-gradient" },
            { name: "css", color: "green-text-gradient" },
            { name: "javascript", color: "pink-text-gradient" },
        ],
        image: spotify,
        source_code_link: "https://github.com/laxman-goud/Spotify-Clone",
        live_link: "https://spotify-clone-pi-bay.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };
