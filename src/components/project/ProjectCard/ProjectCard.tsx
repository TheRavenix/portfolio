import Link from "next/link";

import styles from "./ProjectCard.module.css";

import { Project } from "../types";
import Image from "next/image";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          {project.logoSrc !== null && (
            <div className={styles.logoContainer}>
              <Image
                src={project.logoSrc}
                alt={`${project.name} brand mark`}
                fill
                sizes="24px"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <Link href={`/projects/${project.id}`}>
            <h4 className={styles.name}>{project.name}</h4>
          </Link>
        </div>
        {project.link !== null && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            src
          </a>
        )}
      </div>
    </div>
  );
}
