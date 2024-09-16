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
    docker,
    carrent,
    jobit,
    tripguide,
    crypto,
    chat
    
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
      title: "front-end",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "js Developer",
      iconBg: "#383E56",
      points: [
        " Ive developed a solid foundation in both core and advanced concepts.",
        " For example, Ive built dynamic, interactive web applications using React js" ,
        "Im comfortable integrating APIs and managing asynchronous operations, which helps ensure smooth and responsive user experiences.",
      ],
    },
    {
      title: "React Developer",
      iconBg: "#E6DEDD",
      points: [
       "Managed state and props effectively to ensure seamless data flow and user interaction.",
        " Implemented advanced features like hooks for state management and handling side effects.",
         "Utilized React Router for efficient navigation within applications.",
       "  Integrated third-party libraries and APIs to enhance functionality and performance.",
        " Optimized performance using techniques like memoization and lazy loading.",
        " Built high-quality, scalable applications that deliver exceptional user experiences.",
      ],
    },
    {
      title: "backend Developer",
      iconBg: "#383E56",
      points: [
        "Built and maintained server-side applications using Node.js and Express.js, ensuring high performance and scalability.",
       " Designed and implemented RESTful APIs to handle client requests and manage data exchange.",
       " Utilized middleware for tasks such as authentication, logging, and request validation to enhance application functionality and security.",
       " Managed database interactions with popular databases (e.g., MongoDB).",
       " Ensured data validation and sanitization to maintain data integrity and prevent security vulnerabilities.",
       " Optimized application performance through techniques such as caching, rate limiting, and efficient query design.",
      ],
    },
    {
      title: "Full stack Developer",
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
 
  const projects = [
    {
      name: "MERN chat APP ",
      description:
        "this mern chat app provide real time chatting environment by using socket.oi. people can chat with their online friends ",
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
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "blue-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/Deepak-singh077/mern-chat-app",
    },
    {
      name: "CRYPTO DASHBOARD",
      description:
        "Web application that show the all blockchain cryptocurrencys prices. its also shows real time crpyto data with charts and graph. which helps user to be updated about cryptos",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/Deepak-singh077/crypto-dashborad",
    },
    {
      name: "video call APP",
      description:
        "| UPCOMMING|   A video call app that provide real time video connections bwteen users for talking",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,  projects };