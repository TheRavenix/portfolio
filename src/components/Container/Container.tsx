import clsx from 'clsx'
import type { ComponentProps } from 'react'

import styles from './Container.module.css'

type Props = {} & ComponentProps<'div'>

export function Container({ className, ...rest }: Props) {
  return <div className={clsx(styles.container, className)} {...rest} />
}
