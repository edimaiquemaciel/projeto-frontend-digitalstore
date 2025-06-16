
function Informations({title, informations}) {
    
  return (
    <div className="flex flex-col items-start justify-between gap-7 max-w-[200px]">
        <h4 className="text-[1.125rem] font-semibold">{title}</h4>
        <ul className="flex flex-col items-start justify-between gap-4">
            {informations.map(info => (
                <li className="font-normal text-[0.875rem] text-gray-200" key={info.text}>
                    <a href={info.link}>{info.text}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Informations