import clsx from 'clsx'
import { useLocation } from '@tanstack/react-router'

import styles from './Navbar.module.css'

const links = [
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Links', path: '/links' },
  { name: 'Contact', path: '/contact' },
]

export function Navbar() {
  const location = useLocation()

  return (
    <nav className={styles.navbar}>
      {links.map((link, index) => {
        return (
          <div key={index} className={styles.linkWrapper}>
            <a
              className={clsx(
                styles.link,
                link.path === location.pathname && styles.active,
              )}
              href={link.path}
            >
              {link.name}
            </a>
            {index !== links.length - 1 && (
              <span className={styles.separator}>/</span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
