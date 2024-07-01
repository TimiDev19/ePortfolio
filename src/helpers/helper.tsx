import reactLogo from '../assets/React.webp'
import tailwindLogo from '../assets/tailwind.png'
import reduxLogo from '../assets/redux-logo-vector.svg'
import typescriptLogo from '../assets/typescriptlogo.svg'
import javscriptLogo from '../assets/JavaScript-logo.png'
import viteLogo from '../assets/Vitejs-logo.svg.png'
import nextjsLogo from '../assets/nextjs-icon-512x512-y563b8iq.png'
import htmllogo from '../assets/html.png'
import csslogo from '../assets/css-logo.png'
import vercelLogo from '../assets/Vercel_favicon.svg'
import bitbucketlogo from '../assets/bitbucketlogo.webp'
import githublogo from '../assets/github.png'
import kanban from '../assets/kanban.webp'
import invoice from '../assets/invoice-manager.webp'
import Firebase from '../assets/firebase.webp'
import eCommerce from '../assets/eCommerceProject.png'

const techstack = {
    "languages": [
        {
            image: htmllogo,
            name: "HTML",
            about: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
        },
        {
            image: csslogo,
            name: "CSS",
            about: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML."
        },
        {
            image: vercelLogo,
            name: "Vercel",
            about: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
        },
        {
            image: reactLogo,
            name: "React",
            about: "React is the library for web and native user interfaces."
        },
        {
            image: tailwindLogo,
            name: "Tailwind CSS",
            about: "Tailwind CSS is a utility-first CSS framework for building modern websites without ever leaving your HTML."
        },
        {
            image: typescriptLogo,
            name: "Typescript",
            about: "TypeScript extends JavaScript by adding types to the language."
        },
        {
            image: reduxLogo,
            name: "Redux",
            about: "Redux helps you write applications that behave consistently, run in different environments and are easy to test."
        },
        {
            image: Firebase,
            name: "Firebase",
            about: "Firebase is a set of backend cloud computing services and application development platforms provided by Google."
        },
        {
            image: viteLogo,
            name: "Vite",
            about: "Vite JS is majorly used to set up a development environment for various frameworks like React and Vue etc."
        },
        {
            image: nextjsLogo,
            name: "NextJS",
            about: "Next.js is a React framework that gives you building blocks to create web applications."
        },
        {
            image: javscriptLogo,
            name: "JavaScript",
            about: "JS is a scripting language that enables you to create dynamically updating content, control multimedia, and so much more."
        },
        {
            image: githublogo,
            name: "Github",
            about: "Git is used to store the source code for a project and track the complete history of all changes to that code."
        },
        {
            image: bitbucketlogo,
            name: "Bitbucket",
            about: "Bitbucket Cloud is a Git-based code and CI/CD tool optimized for teams using Jira."
        },
        {
            image: htmllogo,
            name: "HTML",
            about: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
        },
        {
            image: csslogo,
            name: "CSS",
            about: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML."
        },
        {
            image: vercelLogo,
            name: "Vercel",
            about: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
        },
    ],
    "projects":[
        {
            image: kanban,
            title: "Kanban Task Manager",
            description: "This is a fully funtional and responsive task management web application featuring a Kanban board. Users acn easily add, edit and delete tasks and it also features a dark and light mode option",
            liveLink: "https://timi-kanban.vercel.app/",
            tech: "React, TypeScript, TailwindCSS, Redux",
        },
        {
            image: invoice,
            title: "Invoice Manager",
            description: "This is a fully funtional and responsive invoice management web application that uses Firebase for both the Database and Authentication. It allows users to create, update and delete invoices anf the addition of a dark and light mode feature all adds to the outstanding user experience.",
            liveLink: "https://timi-invoice-manager.vercel.app/",
            tech: "React, Firebase, TailwindCSS, Redux",
        },
        {
            image: eCommerce,
            title: "JMT Fashion Website",
            description: "This is a fully funtional and responsive ecommerce web application that allows users do shopping from the comfort of their home. It features a cart where users can view edit and confirm their orders allowing a smooth and efficient user experience. The items are all being pulled from an api.",
            liveLink: "https://ecommerce-oluwatimilehin.vercel.app/",
            tech: "React, TailwindCSS",
        },
    ]
}

export default techstack
