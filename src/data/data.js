export const about = {
    name: "Martin Silva-Diaz",
    role: "Engineering Undergraduate at the University of Waterloo",
    email: "your.email@example.com",
};

export const seo = {
    title: `${about.name}`,
    description: "Minimal, clean Next.js portfolio template for developers seeking a simple, professional online presence without extra complexity.",
    keywords: "portfolio, web developer, Next.js, developer portfolio, minimal portfolio",
}

export const skills = [
    { name: "Html", alt: "html logo", icon: "/html.svg" },
    { name: "Css", alt: "css logo", icon: "/css.svg" },
    { name: "Js", alt: "js logo", icon: "/js.svg" },
    { name: "Tailwind", alt: "tailwind logo", icon: "/tailwind.svg" },
    { name: "React Js", alt: "react logo", icon: "/react.svg" },
    { name: "Next Js", alt: "nextjs logo", icon: "/nextjs.svg" },
];

export const socials = {
    github: "https://github.com/msilvadiaz",
    linkedin:"https://www.linkedin.com/in/martinsilvadiaz/",
    email: "martin.eduardo.silva.diaz@gmail.com",
    resume: "/Resume_Martin_Silva-Diaz.pdf",
};

export const projects = {
    pinProjects: [
        {
            title: "Stock Portfolio Analysis Tool",
            description:
                "Developed a full-stack portfolio analysis platform that tracks customized portfolios, visualizes performance, computes the efficient frontier and recommends allocations based on risk preferences.",
            tags: ["Pandas", "Python Flask", "React"],
            link: "https://portfolio-metrics-analyzer.vercel.app/",
        },
        {
            title: "Financial Budgeting & Planning Tool",
            description:
                "Developed an Excel VBA budgeting tool that automates expense tracking and visualization, incorporates real-time data validation for reliable calculations.",
            tags: ["VBA", "Excel"],
            link: "https://1drv.ms/x/c/97312058463c78a7/EZD8pGZI12dJu1apDoR1V9MBy-U9vMZ0jaTrpHZwkfI0WQ?e=WLXfC5",
        },
    ],
    otherProjects: [],
};

export const experience = [
    {
        role: "Data Science Intern",
        company: "Scotiabank",
        description: "Incoming Fall 2026, CI&DA - International Banking",
        date: "Sep 2026- Dec 2026",
        logo: "/scotiabank.png",
        logoAlt: "Scotiabank logo",
        link: "https://www.scotiabank.com/ca/en/about.html",
    },
    {
        role: "Business Administrator Intern",
        company: "Scotia Wealth Management",
        description: "Supported operational tasks and monitored trade activity for Scotia Wealth Management.",
        date: "Jan 2026 – Apr 2026",
        logo: "/scotiabank.png",
        logoAlt: "Scotiabank logo",
        link: "https://www.scotiawealthmanagement.com/ca/en/about-us.html",
    },
    {
        role: "Autonomy Software Developer",
        company: "Waterloo Aerial Robotics Group",
        description: "Built autonomous parameter verification features for drone systems and reliability testing.",
        date: "Aug 2025 – Dec 2025",
        logo: "/WARG.png",
        logoAlt: "Waterloo Aerial Robotics Group logo",
        link: "https://www.uwarg.com/",
    },
    {
        role: "Product Compliance Intern",
        company: "IPEX by Aliaxis",
        description: "Developed compliance documentation to support quality assurance for products distributed across Canada.",
        date: "May 2025 – Aug 2025",
        logo: "/IPEX.png",
        logoAlt: "IPEX logo",
        link: "https://ipexna.com/",
    },
];
