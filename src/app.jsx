import Header from './components/header'
import CatFact from './components/cat-fact'
import { useEffect, useState } from 'react'

export default function App() {
  const [fact, setFact] = useState('')

  const fetchFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => setFact(data.fact))
      .catch((error) => console.error('Error fetching cat fact:', error))
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-900 text-white">
      <Header />
      <CatFact fact={fact} onClick={fetchFact} />
    </main>
  )
}
