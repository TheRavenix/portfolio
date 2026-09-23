import clsx from "clsx";
import type { ComponentProps } from "react";

import styles from "./Input.module.css";

import { Label } from "../Label";

type Props = {
  label: string;
} & ComponentProps<"input">;

export function Input({ className, label, id, ...props }: Props) {
  return (
    <div className={styles.inputGroup}>
      <Label htmlFor={id}>{label}</Label>
      <input className={clsx(styles.input, className)} id={id} {...props} />
    </div>
  );
}
