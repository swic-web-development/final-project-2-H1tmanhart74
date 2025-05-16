export default function Section({ fact }) {
  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-900 p-4">
      <h2 className="text-xl font-bold text-blue-400">Cat Fact</h2>
      <p className="text-blue-400">Fact: {fact}</p>
    </section>
  )
}
