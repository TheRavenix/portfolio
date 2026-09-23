import { createFileRoute } from '@tanstack/react-router'

import styles from './index.module.css'
import githubSvg from '/icons/github.svg?raw'
import linkedinSvg from '/icons/linkedin.svg?raw'

import { Template } from '#/components/Template'
import { Anchor } from '#/components/Anchor'

export const Route = createFileRoute('/links/')({
  component: Links,
})

function Links() {
  return (
    <Template>
      <div className={styles.links}>
        <Anchor
          href="https://github.com/TheRavenix"
          target="_blank"
          icon={
            <div
              className={styles.iconWrapper}
              dangerouslySetInnerHTML={{ __html: githubSvg }}
            />
          }
        >
          Github
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/theravenix"
          target="_blank"
          icon={
            <div
              className={styles.iconWrapper}
              dangerouslySetInnerHTML={{ __html: linkedinSvg }}
            />
          }
        >
          Linkedin
        </Anchor>
      </div>
    </Template>
  )
}
