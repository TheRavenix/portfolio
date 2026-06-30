import { Links } from "../Links";

import styles from "./Header.module.css";

import { MetaText } from "../text/MetaText";

type Props = {
  title: string;
  execludeLinks?: string[];
};

export function Header({ title, execludeLinks = [] }: Props) {
  return (
    <header className={styles.header}>
      <MetaText>{title}</MetaText>
      <Links execlude={execludeLinks} />
    </header>
  );
}
