import clsx from 'clsx'
import { GlobeIcon } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

import styles from './Anchor.module.css'

type Props = {
  icon?: ReactNode
} & ComponentProps<'a'>

export function Anchor({ className, children, icon, ...rest }: Props) {
  return (
    <a className={clsx(styles.link, className)} {...rest}>
      {icon !== undefined ? icon : <GlobeIcon className={styles.icon} />}
      {children}
    </a>
  )
}
