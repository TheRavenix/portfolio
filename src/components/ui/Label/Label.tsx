import clsx from "clsx";
import type { ComponentProps } from "react";

import styles from "./Label.module.css";

type Props = ComponentProps<"label">;

export function Label({ className, children, ...props }: Props) {
  return (
    <label className={clsx(styles.label, className)} {...props}>
      {children}
    </label>
  );
}
