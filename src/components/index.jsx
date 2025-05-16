import Section from './section'

export default function VehicleGrid({ facts }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((fact) => (
        <Section fact={fact} key={fact.uid || fact.name} />
      ))}
    </div>
  )
}
