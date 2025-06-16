import { useState } from "react";


function FilterGroup({title, inputType, options}) {

    const [teste, setTeste] = useState(["Adidas", "Nike", "Esporte e lazer", "Masculino", "Feminino"]);

    const handleChange = (text) => {
    setTeste((prev) =>
      prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text]
    );
  };
  const [selectedRadio, setSelectedRadio] = useState("Novo");

  return (
    <div>
        <h5 className='text-[14px] text-[#474747] font-bold mb-2.5'>{title}</h5>
        <div className='flex flex-col justify-between gap-2'>
            {options.map(option => (
                <label className='flex items-center gap-2.5 text-sm font-medium text-[#474747]' htmlFor={option.text}>
                    <input 
                    className='w-[22px] h-[22px] accent-[#C92071]' 
                    type={inputType} 
                    name={`${inputType === "radio" ? "estado" : option.text}`} 
                    value={option.value}
                    checked={
                        inputType === "checkbox"
                        ? teste.includes(option.text)
                        : selectedRadio === option.text
                    }
                    onChange={() => inputType === "checkbox" ? handleChange(option.text) : setSelectedRadio(option.text)}/>
                    {option.text}
                </label>
            ))}
        </div>
        
    </div>
  )
}

export default FilterGroup