export default function Section({ facts }) {
  const { name, fact } = facts

  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-900 p-4">
      <h2 className="text-xl font-bold text-blue-400">{name}</h2>
      <p className="text-blue-400">Model: {fact}</p>
    </section>
  )
}
