import * as React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'

import styles from './Dialog.module.css'

import { Button } from '../Button'

type Props = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  children: React.ReactNode
  bodyClassName?: string
}

export function Dialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  bodyClassName,
}: Props) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={styles.content}>
          <RadixDialog.Title className={styles.title}>
            {title}
          </RadixDialog.Title>
          {description && (
            <RadixDialog.Description className={styles.description}>
              {description}
            </RadixDialog.Description>
          )}
          <div className={clsx(styles.body, bodyClassName)}>{children}</div>
          <RadixDialog.Close
            className={styles.close}
            aria-label="Close"
            asChild
          >
            <Button size="icon" icon={<XIcon />} />
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
