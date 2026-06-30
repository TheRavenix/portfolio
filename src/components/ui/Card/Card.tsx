import { PropsWithChildren } from "react";

import styles from "./Card.module.css";

type Props = {
  title: string;
  description?: string;
} & PropsWithChildren;

export function Card({ title, description, children }: Props) {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
      {children}
    </div>
  );
}
