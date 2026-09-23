import styles from './TitleLink.module.css'

export function TitleLink() {
  return (
    <a className={styles.link} href="/">
      <h1 className={styles.title}>TheRavenix | Web Developer</h1>
    </a>
  )
}
