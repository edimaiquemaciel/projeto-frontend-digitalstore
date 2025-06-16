import { Link } from "react-router-dom"

function Section({title, titleAlign="left", link, children, className, classNameTitle="text-[#474747] text-2xl font-bold"}) {
  return (
    <div className={className}>
        <div className={`w-full flex items-center justify-${titleAlign === "center" ? "center" : "between"}`}>
          <h1 className={classNameTitle}>
              {title}
          </h1>
          {link && (
              <Link to={link.link} className="text-[18px] text-[#C92071] hover:underline hover:cursor-pointer">{link.text}</Link>
          )}
        </div>
        {children}
    </div>
  )
}

export default Section