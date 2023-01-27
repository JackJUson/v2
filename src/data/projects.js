import Netflix from "../assets/netflix.png";
import Twitter from "../assets/twitter.png";
import Google from "../assets/google.png";

export const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Netflix is a subscription-based streaming service that allows our members to watch TV shows, movies and documentaries on an internet-connected device.",
    techs: ["React", "NextJs", "Recoil", "Tailwind", "Stripe"],
    github: "https://github.com/JackJUson/netflix-clone",
    live: "https://netflix-clone-six-vert.vercel.app/login",
    image: Netflix,
  },
  {
    id: 2,
    title: "Twitter Clone",
    description:
      "Twitter is a social media application where users can post and share their thoughts, feelings or just talk about something they are passionate about.",
    techs: ["React", "Recoil", "NodeJs", "Firebase", "Next Authentication"],
    github: "https://github.com/JackJUson/twitter-clone",
    live: "https://twitter-clone-jackjuson.vercel.app/",
    image: Twitter,
  },
  {
    id: 3,
    title: "Search Engine",
    description:
      "A program that searches for and identifies information in a database that correspond to keywords or characters specified by the user, used especially for finding particular sites on the web",
    techs: ["HTML", "CSS", "React", "Firebase", "Vercel"],
    github: "https://github.com/JackJUson/search-engine",
    live: "https://search-engine-six-rust.vercel.app/",
    image: Google,
  },
];
