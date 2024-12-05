import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cryptoStream from "@/public/crypto-stream.png";
import digiShop from "@/public/digishop.png";
import reviewHub from "@/public/review-hub.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Developer",
    location: "Only Education International Pvt Ltd",
    description:
"As the lead Frontend Developer at Only Education International Pvt Ltd, I built their entire edtech website from scratch using Next.js, TypeScript, JavaScript, and Tailwind CSS with Strapi as the backend. I designed a cutting-edge, responsive platform that effectively competes in the market, focusing on creating an intuitive user experience and optimizing lead generation. My work involved developing custom REST APIs, implementing strategic UI/UX design, and transforming complex technical requirements into a high-performance web application that drives user engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Web Designer and Developer",
    location: "Zencommerce India",
    description:
      "At Zencommerce India, I developed robust web solutions for multiple clients using cutting-edge technologies including React.js, HTML, CSS, JavaScript, Bootstrap, and WordPress. I transformed complex project requirements into intuitive, responsive web interfaces that delivered exceptional user experiences and met diverse business objectives. My role involved creating custom web designs, implementing seamless frontend functionalities, and ensuring high-performance digital platforms across different client projects.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  
  {
    title: "Bachelor of Science-Information Technology",
    location: "Smt. Sushiladevi Deshmukh College",
    description:
      "Completed a comprehensive program focused on core concepts of information technology, including programming, database management, networking, and software development. Gained hands-on experience in problem-solving, system design, and project management, laying a strong foundation for a career in software development and web technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Crypto Stream",
    description:
      "Developed a real-time cryptocurrency tracking application using React and Material UI.",
    tags: ["React", "Material UI", "Framer", "Chartjs"],
    imageUrl: cryptoStream,
  },
  {
    title: "Digi Shop",
    description:
      "Designed and built an ecommerce web application from front to back utilizing MongoDB, Express, React, Node.js (MERN)",
    tags: ["React", "Next.js",  "Redux", "Tailwind", "Express", "MongoDB" ],
    imageUrl: digiShop,
  },
  {
    title: "Review Hub",
    description:
      "Created a platform for users to share movie and web series reviews with upload and OTP authentication functionality.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: reviewHub,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Shadcn",
  "strapi",
  "REST API"
] as const;
