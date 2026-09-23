import { createFileRoute } from '@tanstack/react-router'

import styles from './index.module.css'

import { Template } from '#/components/Template'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <Template>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src="/images/logo.png"
            alt="TheRavenix Logo"
            width={200}
            height={200}
          />
        </div>
        <p>
          Hello! I am Aissa Bedr, I build smooth, minimal and complex web
          experiences.
        </p>
      </div>
    </Template>
  )
}
