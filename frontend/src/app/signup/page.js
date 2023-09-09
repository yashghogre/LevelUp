'use client'

import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import styles from '@/app/signup/signup.module.css'
import toast, { Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation";
// import axios from "axios"

const page = () => {

    const router = useRouter();

    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        fetch('http://localhost:8080/api/home')
            .then(
                response => response.json()
            )
            .then((data) => {
                // console.log(data);
            })
            .catch(rejected => {
                console.log(rejected)
            })
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fname, lname, email, password } = user;
        console.log(user);
        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fname, lname, email, password }),
        })

        const data = await response.json()

        if (data.status === 422) {
            toast.error('Registration Failed')
        }
        else {
            toast.success('Registration Successfully')
            router.push('/signin')
        }
    }

    return (
        <div>
            <Toaster />
            <div>
                <Navbar />
            </div>
            <div className={styles.formDiv}>
                <form className={styles.form} onSubmit={handleSubmit} method="POST">
                    <div className={styles.upperTextDiv}>
                        <h3>Sign-up to LevelUp</h3>
                    </div>
                    <div className={styles.nameDiv}>
                        {/* <label htmlFor="fname">First Name:</label> */}
                        <input type='text' name='fname' placeholder="First Name" className={styles.input} value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} required />
                        {/* <label htmlFor="lname">Last Name:</label> */}
                        <input type='text' name='lname' placeholder="Last Name" className={styles.input} value={user.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} required />
                    </div>
                    {/* <label htmlFor="email">Enter your e-mail:</label> */}
                    <input type='email' name='email' placeholder="e-mail" className={styles.input} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                    {/* <label htmlFor="password">Enter your Password:</label> */}
                    <input type='password' name='password' placeholder="Password" className={styles.input} value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                    {/* <label htmlFor="cpassword">Enter confirm Password:</label> */}
                    <div className={styles.buttonDiv}>
                        <button type="submit" className={styles.button}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page