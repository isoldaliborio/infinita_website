import styles from './page.module.scss'

export default function Home() {
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          Welcome to the projects page!
        </div>
      </main>
    )
  }