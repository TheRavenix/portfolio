import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

const data = [
  {
    title: "How Everything Started",
    description:
      "The story goes back to 2020, when I was watching my old cousin who is a software engineer, Building websites and web games. I liked the fact that a computer can do more than gaming, I kept observing for 2 years.",
  },
  {
    title: "The Frontend",
    description:
      "By 2022, I had enough data and I already bought my first desktop. I started with c++ basics, then moved to the web, with HTML, CSS, and JavaScript. It was a bit hard at first, but that what made me enjoy more.",
  },
  {
    title: "The Backend",
    description:
      "By late 2023, I started learning about the backend. Since I already had an experience with JavaScript, I learnt Node.js and Express. Yet things did not went as expected, I struggled a lot with those new technologies, to the point of thinking of abandoning everything and just move on! I stopped for a while, then came back stronger.",
  },
  {
    title: "A Hobby",
    description:
      "When I started coding, I did not think of anything rather than doing it as a thing I like, a hobby! And until this day, I am still enjoying what I am doing, just like seeing my first projects on my first days...",
  },
  {
    title: "Why Coding",
    description:
      "Writing code was my first thing to do besides school, and I liked it so much. I also like when I lose track of time while solving a complex problem or designing a beautiful UI.",
  },
  {
    title: "Beyond The Screen",
    description:
      "I love reading books, doodling, walking, running, learning new things, and watching Youtube, and playing Clash of Clans. This year I will graduate from an English literature university, since Arabic is my first language. If you want to meet me somewhere, you will find me in nature, appreciating everything in there, and watching each sunrise and sunset.",
  },
];

export default function About() {
  return (
    <main>
      <Container>
        <Header title="About" />
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </Container>
    </main>
  );
}
