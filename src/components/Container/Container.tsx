import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Container.module.css";

type Props = {
  withPaddingBlock?: boolean;
  withSectionGap?: boolean;
  spacing?: "none" | "lg" | "xl";
  compact?: boolean;
} & ComponentProps<"div">;

export function Container({
  className,
  withPaddingBlock = false,
  withSectionGap = false,
  spacing = "none",
  compact = false,
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        compact ? styles.compactContainer : styles.container,
        withPaddingBlock && styles.withPaddingBlock,
        withSectionGap && styles.withSectionGap,
        styles[spacing],
        className,
      )}
      {...rest}
    />
  );
}
