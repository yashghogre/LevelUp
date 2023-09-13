'use client'

import Link from "next/link"
import Navbar from "../components/Navbar"
import styles from '@/app/signin/signin.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from "react"
import { useRouter } from "next/navigation"

const page = () => {

    const router = useRouter()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const { email, password } = user;

        const response = await fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()

        if (response.status === 200) {
            toast.success('Login Successful')
            router.push('/dashboard')
        }
        else if (response.status === 403)
        {
            toast.error('Incorrect Password')
        }
        else {
            toast.error('Login Failed')
        }

    }

    return (
        <div>
            <div>
                <Toaster />
            </div>
            <div>
                <Navbar />
            </div>
            <div className={styles.formDiv}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.upperTextDiv}>
                        <h3>Sign-in to LevelUp</h3>
                    </div>
                    <input type="email" name="email" placeholder="E-mail" className={styles.input} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                    <input type="password" name="password" placeholder="Password" className={styles.input} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                    <button className={styles.button}>Sign-in</button>
                    <div className={styles.signupDiv}>
                        <p className={styles.lastText}>New User?</p>
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