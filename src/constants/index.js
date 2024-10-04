import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  freelancer,
  mastercard,
  pngwing,
  shopify,
  carrent,
  jobit,
  tripguide,
  Ai,
  healthcare,
  socialsite,
  ecommerce,
  horizon,
  hotel,
  threejs,
  pizza,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "mastercard",
    icon: mastercard,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "square space",
  //   icon: pngwing,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and maintained websites and web applications using HTML, CSS, JavaScript, and various frameworks (e.g., React)",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to deliver high-quality projects on time",
      "Implemented responsive design techniques to ensure websites are mobile-friendly and accessible across different devices and browsers",
      "Optimized website performance by improving load times, reducing server response times, and implementing caching strategies",
      "Conducted code reviews and provided constructive feedback to peers to maintain code quality and best practices",
      "Integrated third-party APIs and services to enhance website functionality and user experience",
      "Utilized version control systems like Git for efficient project management and collaboration",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      " Proficiency in Multiple Technologies: Advanced skills in front-end (HTML, CSS, JavaScript, React) & back-end (Node.js,MongoDB,Appwrite,Supabase development).",
      "Project Management: Experience leading projects from start to finish using Agile methodologies.",
      "DevOps Expertise: Proficient with Docker, Kubernetes.",
      "API Development: Skilled in designing and integrating RESTful and GraphQL APIs.",
      "Testing and Debugging: Strong abilities in writing tests and debugging efficiently.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhisekh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhisekh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abhisekh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/abhicodyabhicody",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/abhicody",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/abhicody",
  },
  // {
  //   name: "Imaginify AI",
  //   description:
  //     "Build an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal. ",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Ai saas",
  //       color: "red-text-gradient",
  //     },
  //   ],
  //   image: Ai,
  //   source_code_link: "https://github.com/abhicody",
  // },
  // {
  //   name: "Healthcare",
  //   description:
  //     "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "appwrite",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "red-text-gradient",
  //     },
  //   ],
  //   image: healthcare,
  //   source_code_link: "https://github.com/abhicody",
  // },
];

const projects2 = [
  {
    name: "Imaginify AI",
    description:
      "Build an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Ai saas",
        color: "red-text-gradient",
      },
    ],
    image: Ai,
    source_code_link: "https://github.com/abhicody",
  },
  {
    name: "Healthcare",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "red-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/abhicody",
  },
  {
    name: "Threads clone(social-Media)",
    description:
      "A social media platform is an online service or application that allows users to create, share, and interact with content and other users. These platforms facilitate communication, content sharing, and networking among individuals and communities",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "red-text-gradient",
      },
    ],
    image: socialsite,
    source_code_link: "https://github.com/abhicody",
  },
];

const projects3 = [
  {
    name: "Ecommerce",
    description:
      " An incredible e-commerce webshop with an admin dashboard and CMS using Next 14, Stripe, TypeScript, and Payload CMS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "red-text-gradient",
      },
      {
        name: "payloadCMS",
        color: "yellow-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/abhicody",
  },
  {
    name: "Banking",
    description:
      "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "red-text-gradient",
      },
      {
        name: "payloadCMS",
        color: "yellow-text-gradient",
      },
    ],
    image: horizon,
    source_code_link: "https://github.com/abhicody",
  },
  {
    name: "Pizza & Pasta",
    description:
      "A pizza website is designed to offer a seamless and appetizing experience for pizza lovers. It typically features a comprehensive menu showcasing various pizza options, including classic favorites and specialty pizzas, along with sides, desserts, and beverages. The website includes an easy-to-use online ordering system for delivery or takeaway, often with options to customize your pizza with different toppings, crusts, and sizes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/abhicody",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projects2,
  projects3,
};
