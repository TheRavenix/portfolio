import styles from "./page.module.css";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/project/ProjectCard";
import { PROJECTS_DATA } from "@/components/project/data";

export default function Projects() {
  return (
    <main>
      <Container>
        <Header title="Projects" />
        <div className={styles.projects}>
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
