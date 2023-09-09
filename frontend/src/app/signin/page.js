import Link from "next/link"
import Navbar from "../components/Navbar"
import styles from '@/app/signin/signin.module.css'
import toast, { Toaster } from 'react-hot-toast'

const page = () => {
    return (
        <div>
            <div>
                <Toaster />
            </div>
            <div>
                <Navbar />
            </div>
            <div className={styles.formDiv}>
                <form className={styles.form}>
                    <div className={styles.upperTextDiv}>
                        <h3>Sign-in to LevelUp</h3>
                    </div>
                    <label htmlFor="email">e-mail</label>
                    <input type="email" name="email" className={styles.input} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className={styles.input} />
                    <button className={styles.button}>Sign-in</button>
                    <div className={styles.signupDiv}>
                        <p className={styles.lastText}>new user?</p>
                        <Link href='/signup' className={styles.signupLink}>
                            <p className={styles.lastText}>Sign-Up</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page