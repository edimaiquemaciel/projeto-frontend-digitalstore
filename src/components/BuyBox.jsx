import { Rating } from "primereact/rating";

function BuyBox({name, reference, stars, rating, price, priceDiscount, description, children}) {
  return (
    <div className="w-[440px] flex flex-col items-start justify-between gap-2 mt-[-10px]">
        <h1 className="text-[32px] text-[#1F1F1F] font-bold w-[420px]">{name}</h1>
        <div className="text-[12px] font-medium text-[#666666]">
            <span>Casual | </span>
            <span>Nike | </span>
            <span>REF:{reference}</span>
        </div>
        <div className="flex items-center justify-start gap-3.5">
                <Rating 
                value={stars} 
                readOnly 
                cancel={false}
                />
            <div className="flex items-center justify-start pt-0.5">
                <div className="flex items-start justify-between gap-1.5 bg-[#F6AA1C] px-[11px] py-0.5 rounded-sm">
                    <span className="text-white text-[13px] font-bold">{stars}</span>
                    <Rating value={1} stars={1} cancel={false}/>
                </div>
                <span className="text-[14px] font-medium text-[#8F8F8F] ml-1">({rating} avaliações)</span>
            </div>
        </div>
        <div className="flex items-center gap-4 my-3">
            <div className="flex items-end"> 
                {priceDiscount ? (
                    <div className="flex items-center">
                        <p>R$ 
                            <span className="text-4xl font-bold ml-0.5">{priceDiscount}</span>,00 
                            <span className="font-light text-[#CCCCCC] line-through ml-2.5">{price},00</span>
                        </p>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <p>R$ 
                            <span className="text-4xl font-bold ml-0.5">{price}</span>,00 
                        </p>
                    </div>
                )}
            </div>
        </div>
        <div className="mb-5">
            <h4 className="text-sm font-bold text-[#8F8F8F] mb-2.5">Descrição do produto</h4>
            <p className="text-sm font-medium text-[#474747]">{description}</p>
        </div>
        {children}
        <button 
        className="px-[75px] py-2.5 bg-[#FFB31F] rounded-[6px] text-[#F5F5F5] font-bold mt-[15px] transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#FF9F00]" type="button">COMPRAR</button>
    </div>
  )
}

export default BuyBox