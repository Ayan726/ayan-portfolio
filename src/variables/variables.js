import cryptobucks from "../assets/cryptobucks.png";
import talkative from "../assets/talkative.png";
import formex from "../assets/formex.png";
import jobsLelo from "../assets/JobsLelo.png";
import portfolioSite from "../assets/portfolio-site.png";
import codeCollabo from "../assets/CodeCollabo.png";

export const variables = {
  resumeURL:
    "https://drive.google.com/file/d/1nnkYPdwhEXsAoKomIYmqjNxn6Im0mSyv/view?usp=sharing",
  linkedInURL: "https://www.linkedin.com/in/ayan-ghosh-sde/",
  instagramURL: "https://www.instagram.com/in.vincible._/",
  upworkURL: "https://www.upwork.com/freelancers/~01fdbb9ada12736ea1",
  githubURL: "https://github.com/Ayan726",
  leetcodeURL: "https://leetcode.com/Vengeance_/",
  fiverrURL: "https://www.fiverr.com/s/9agZ3D",
  facebookURL: "https://www.facebook.com/profile.php?id=100080278303700",
  gmail: "mailto:ayang8702@gmail.com",
  phone: "tel:+919832645015",
};

export const projects = [
  {
    id: 0,
    name: "Formex",
    summary:
      "A dynamic form builder, enables users to create, customize & publish forms using a drag and drop interface.",
    image: formex,
    site: "https://form-builder-seven-black.vercel.app/",
    github: "https://github.com/Ayan726/Form-Builder",
    tech: "Next JS, Prisma, Dnd-kit",
  },
  {
    id: 1,
    name: "Cryptobucks",
    summary:
      "A crypto screener application, provides up-to-date market information for various cryptocurrencies, showcasing trending coins through interactive graphs.",
    image: cryptobucks,
    site: "https://cryptobucks-ayan.netlify.app/",
    github: "https://github.com/Ayan726/Crypto-Screener",
    tech: "React JS, Recharts",
  },
  {
    id: 2,
    name: "Code-Collabo",
    summary:
      "A real time collaborative code editor which enables users to join a room and write Javascript code in real time.",
    image: codeCollabo,
    site: "https://code-collabo.onrender.com/",
    github: "https://github.com/Ayan726/Code-Collabo",
    tech: "React, Node, Socket.io",
  },
  {
    id: 3,
    name: "Talkative",
    summary:
      "A real time chatting application, enables registered users to chat and exchange static files among themselves.",
    image: talkative,
    site: "https://talkative-ayan.netlify.app/",
    github: "https://github.com/Ayan726/Talkative",
    tech: "React JS, Firebase",
  },
  {
    id: 4,
    name: "Jobs Lelo API",
    summary:
      "A solution for managing and retrieving job posts for startups instead of unorganized WhatsApp group job posts.",
    image: jobsLelo,
    github: "https://github.com/Ayan726/JOBS_LELO/",
    tech: "Node JS, Express JS, Mongodb",
  },
  {
    id: 5,
    name: "Portfolio Site",
    summary:
      "A portfolio website to showcase my educational background and project works.",
    image: portfolioSite,
    site: "https://ayan-portfolio-psi.vercel.app/",
    github: "https://github.com/Ayan726/ayan-portfolio",
    tech: "React JS, Framer-motion",
  },
];
