import Header from './components/header'
import CatFact from './components/cat-fact'
import { useEffect, useState } from 'react'

export default function App() {
  const [fact, setFact] = useState('') // Use a string

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact) // Use data.fact
      })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-900 text-white">
      <Header />
      <CatFact fact={fact} /> {/* Pass as fact, not facts */}
    </main>
  )
}
