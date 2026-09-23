import type { PropsWithChildren } from 'react'

import styles from './Template.module.css'

type Props = {} & PropsWithChildren

export function Template({ children }: Props) {
  return <section className={styles.wrapper}>{children}</section>
}
