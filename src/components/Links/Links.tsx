"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Links.module.css";

type LinkItem = {
  name: string;
  path: string;
};

const links: LinkItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

type Props = {
  execlude?: string[];
};

export function Links({ execlude = [] }: Props) {
  const pathName = usePathname();

  return (
    <div className={styles.links}>
      {links.map((link) => {
        if (pathName === link.path || execlude.includes(link.path)) {
          return null;
        }

        return (
          <Link key={link.path} href={link.path}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
