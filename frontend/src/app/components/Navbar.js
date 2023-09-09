import styles from '@/styles/navbar.module.css'
import Link from 'next/link'
import { TfiAngleDoubleUp } from "react-icons/tfi";

const Navbar = () => {
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
                    <Link href='/#howItWorks' className={styles.hiwLink}>
                        <p className={styles.hiw}>How it Works?</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar