import clsx from "clsx";
import { ComponentProps } from "react";

import styles from "./MetaText.module.css";

type Props = ComponentProps<"span">;

export function MetaText({ className, ...rest }: Props) {
  return <span className={clsx(styles.text, className)} {...rest} />;
}
