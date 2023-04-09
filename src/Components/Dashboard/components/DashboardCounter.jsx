import React, { useEffect, useState } from 'react'

export default function DashboardCounter({ price }) {
  console.log('Counter run')
  const [boxCounter, setBoxCounter] = useState(0)
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setBoxCounter((prev) => prev + 100)
  //   }, 1)

  //   if (boxCounter === 100000) {
  //     clearInterval(interval)
  //   }

  //   return () => clearInterval(interval)
  // }, [boxCounter])

  return <span>{boxCounter}</span>
}
