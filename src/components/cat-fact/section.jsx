export default function Section({ onClick, newFact, fact }) {
  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-900 p-4">
      <h2 className="text-xl font-bold text-blue-400">Fact</h2>
      <p className="text-blue-400">{fact}</p>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        onClick={onClick}
      >
        {newFact}
      </button>
    </section>
  )
}
