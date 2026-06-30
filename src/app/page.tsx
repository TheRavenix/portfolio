import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { MetaText } from "@/components/text/MetaText";
import { Links } from "@/components/Links";

export default function Home() {
  return (
    <main>
      <Container>
        <MetaText>Full Stack Web Developer</MetaText>
        <h1>Hello! This is Aissa Bedr</h1>
        <p>
          A passionate developer, specialized in building fast, scalable web
          experiences, since 2022.
        </p>
        <Links />
      </Container>
    </main>
  );
}
