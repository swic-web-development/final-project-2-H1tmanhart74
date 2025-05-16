export default function Section({ onClick, newFact, fact }) {
  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-900 p-4 shadow-lg">
      <h2 className="text-xl font-bold text-blue-400">Fact</h2>
      <p className="py-2 text-blue-400">{fact}</p>
      <button
        className="rounded bg-gray-800 px-4 py-1 text-blue-400 transition hover:bg-blue-800"
        onClick={onClick}
      >
        {newFact}
      </button>
    </section>
  )
}
