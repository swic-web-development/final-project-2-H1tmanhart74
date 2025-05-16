import Section from './section'

export default function CatFact({ fact, onClick }) {
  return (
    <section className="p-4">
      <Section fact={fact} onClick={onClick} />
    </section>
  )
}
