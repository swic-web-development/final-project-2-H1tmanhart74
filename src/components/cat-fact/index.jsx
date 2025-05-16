import Section from './section'

export default function CatFact({ fact }) {
  return (
    <div className="p-4">
      <Section fact={fact} />
    </div>
  )
}
