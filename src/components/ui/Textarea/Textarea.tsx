import clsx from "clsx";
import type { ComponentProps } from "react";

import styles from "./Textarea.module.css";
import inputStyles from "../Input/Input.module.css";

import { Label } from "../Label";

type Props = {
  label: string;
} & ComponentProps<"textarea">;

export function Textarea({ className, label, id, ...props }: Props) {
  return (
    <div className={inputStyles.inputGroup}>
      <Label htmlFor={id}>{label}</Label>
      <textarea
        className={clsx(styles.textarea, inputStyles.input, className)}
        id={id}
        {...props}
      />
    </div>
  );
}
