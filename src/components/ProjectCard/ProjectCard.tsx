import { useState } from "react";

import styles from "./ProjectCard.module.css";

import { Dialog } from "../ui/Dialog";
import { ImageSlider } from "../ImageSlider";
import { Anchor } from "../Anchor";

export type Project = {
  id: string;
  name: string;
  link: string | null;
  description: string;
  logoSrc: string | null;
  images: string[];
  details: string | null;
};

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.projectCard} onClick={() => setOpen(true)}>
        {project.logoSrc !== null && (
          <div className={styles.logoContainer}>
            <img
              src={project.logoSrc}
              alt={`${project.name} brand mark`}
              sizes="24px"
              className={styles.logo}
            />
          </div>
        )}
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      <Dialog
        title={project.name}
        description={project.description}
        open={open}
        onOpenChange={setOpen}
        bodyClassName={styles.dialogBody}
      >
        <ImageSlider images={project.images} />
        {project.link !== null && (
          <Anchor href={project.link} target="_blank">
            {project.link}
          </Anchor>
        )}
        {project.details !== null && (
          <p className={styles.details}>{project.details}</p>
        )}
      </Dialog>
    </>
  );
}
