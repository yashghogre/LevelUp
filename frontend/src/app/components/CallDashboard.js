'use server'

export default async function callDashboard(){
    
    try {
      const response = await fetch('http://localhost:8080/dashboard', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': 'https://localhost:8080'
        },
        credentials: 'include'
      })

      const data = response.json()
      console.log(data)

      if (!response.status === 200) {
        throw new Error(res.error)
      }

    } catch (error) {
      console.log(error)
      router.push('/signin')
    }
    
  }

