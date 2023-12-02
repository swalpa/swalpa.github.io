const UnlistedItems = ({label, items}: {label: string, items: string[]}) => {
  if ( !items || items.length === 0 ) return null
  return (
    <>
      <h2 className="text-2xl mt-3 lg:mt-4 font-medium">{label}</h2>
      <ul className="px-3 list-disc pl-6 lg:pl-8">
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}

export default UnlistedItems