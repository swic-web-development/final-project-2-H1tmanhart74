import Header from './components/header'
import CatFact from './components/cat-fact'
import { useEffect, useState } from 'react'

export default function App() {
  const [facts, setFact] = useState([])

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => {
        response.json()
      })
      .then((data) => {
        setFact(data.results)
      })
      .catch((error) => console.error('Error fetching movies:', error))
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-900 text-white">
      <Header />
      <CatFact facts={facts} />
    </main>
  )
}
