import styles from './page.module.scss'
import Carousel from '@/components/Carousel/Carousel'


export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel/>
    </main>
  )
}
