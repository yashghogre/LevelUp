'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import callDashboard from '../components/CallDashboard'

const page = () => {

  const router = useRouter()

  const [userData, setUserData] = useState()

  const callDashboard = async () => {
    // try {
    const response = await fetch('http://localhost:8080/dashboard', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'https://localhost:8080'
      },
      credentials: 'include'
    })

    const data = await response.json()
    console.log(data)

    setUserData(data)

    if (!response.status === 200) {
      throw new Error(res.error)
    }

    // } catch (error) {
    //   console.log(error)
    //   // router.push('/signin')
    // }
  }

  useEffect(() => {
    callDashboard()
  }, [])

  return (
    <div>
      <Toaster />
      Congratulations! You made it to the Dashboard!
      <h1>Hello {userData.fname}</h1>
      
    </div>
  )
}

export default page