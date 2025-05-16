import Section from './section'

export default function CatFact({ fact, newFact, onClick }) {
  return (
    <div className="p-4">
      <Section fact={fact} newFact={newFact} onClick={onClick} />
    </div>
  )
}
