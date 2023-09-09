import Image from 'next/image'
import styles from './page.module.css'
import { TfiAngleDoubleUp } from "react-icons/tfi";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className={styles.navbarDiv}>
        <Link href='/' className={styles.logoLink}>
          <div className={styles.logoDiv}>
            <h1>LevelUp</h1>
            <TfiAngleDoubleUp />
          </div>
        </Link>
        <div>
          <Link href='#howItWorks' className={styles.hiwLink}>
            <p className={styles.hiw}>How it Works?</p>
          </Link>
        </div>
      </div>
      <div className={styles.contentDiv}>
        <div className={styles.leftSide}>
          <h1>Level Up</h1>
          <p>The platform that gamifies your self-improvement journey by keeping track of your habits and rewarding you all while you keep increasing the number of habits and keep improving</p>
          <Link href='/signin' className={styles.btnLink}>
            <button className={styles.button}>I wanna Level-Up<TfiAngleDoubleUp /></button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <Image src='/landingPage/1.jpg' alt='vectorImg' height={500} width={500} className={styles.image} />
        </div>
      </div>

      <div id='howItWorks'>
        <h1>How it Works?</h1>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div>
    </div>
  )
}
