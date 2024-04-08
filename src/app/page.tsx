import styles from './page.module.scss'
import Carousel_v2 from '@/components/Carousel/Carousel_v2'


export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel_v2 />
    </main>
  )
}
