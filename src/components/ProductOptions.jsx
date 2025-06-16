import { useState } from 'react';
        
function ProductOptions({options, radius, shape}) {

    const [selectedSize, setSelectedSize] = useState(options[2]);
    const [selectedColor, setSelectedColor] = useState(options[1]);

  return (
    <section className='flex flex-col justify-between gap-4'>
        <h4 className='text-sm text-[#8F8F8F] font-bold'>{shape === "square" ? "Tamanho" : "Cores"}</h4>
        <div className='flex justify-between gap-2.5'>
            {options.map(item => shape === "square" ? (
                <button
                    className='w-[48px] h-[48px] border border-b-gray-400 hover:cursor-pointer transition-all duration-500 ease-in-out font-bold'
                    type="button"
                    onClick={()=> setSelectedSize(item)}
                    style={{
                        backgroundColor: selectedSize === item ? "#C92071" : "",
                        color: selectedSize === item ? "#FFFFFF" : "",
                        border: selectedSize === item ? "2px solid #C92071" : "2px solid #CCCCCC",
                        borderRadius: radius
                    }}
                >
                    {item}
                </button>
            ) : (
                <button
                className='w-[48px] h-[48px] hover:cursor-pointer rounded-[50%]'
                onClick={()=> setSelectedColor(item)}
                style={{
                    backgroundColor: item,
                    width: "31px",
                    height: "31px",
                    border: "none",
                    outline: selectedColor === item ? `2px solid #C92071` : "2px solid transparent",
                    outlineOffset: "2px",
                    transition: "outline 0.3s ease, outline-offset 0.3s ease"
                }}
                type="button"
                >
                </button>
            ))}
        </div>
    </section>
  )
}

export default ProductOptions