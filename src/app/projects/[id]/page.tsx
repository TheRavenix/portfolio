import { notFound } from "next/navigation";

import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { PROJECTS_DATA } from "@/components/project/data";
import { ImageSlider } from "@/components/ImageSlider";
import { MetaText } from "@/components/text/MetaText";
import { Links } from "@/components/Links";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Project({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (project === undefined) {
    notFound();
  }

  return (
    <main>
      <Container>
        <MetaText>{project.name}</MetaText>
        <div className={styles.content}>
          <ImageSlider images={project.images} />
          <p>{project.description}</p>
        </div>
        <Links />
      </Container>
    </main>
  );
}
