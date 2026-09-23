import { createFileRoute } from '@tanstack/react-router'
import { CopyCheckIcon, CopyIcon, SendIcon } from 'lucide-react'

import styles from './index.module.css'

import { Template } from '#/components/Template'
import { Button } from '#/components/ui/Button'
import { useClipboard } from '#/hooks/useClipboard'

// TODO: Use an env variable instead
const EMAIL = 'aissadev1@gmail.com'

export const Route = createFileRoute('/contact/')({
  component: Contact,
})

function Contact() {
  const { copyText, copied } = useClipboard()

  return (
    <Template>
      <div className={styles.container}>
        <p>Feel free to reach me out whenever you want at:</p>
        <div className={styles.emailWrapper}>
          <h3 className={styles.email}>{EMAIL}</h3>
          <Button
            size="icon"
            variant="secondary"
            icon={copied ? <CopyCheckIcon /> : <CopyIcon />}
            onClick={() =>
              copyText({
                text: EMAIL,
              })
            }
          />
        </div>
        <p>or:</p>
        <a href={`mailto:${EMAIL}`}>
          <Button size="lg" className={styles.sendMailBtn} icon={<SendIcon />}>
            Send me an email!
          </Button>
        </a>
      </div>
    </Template>
  )
}
