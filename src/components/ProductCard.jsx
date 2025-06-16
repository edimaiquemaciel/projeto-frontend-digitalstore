import { Link } from "react-router-dom"


function ProductCard({image,category,name,price, priceDiscount, id }) {

  return (
        <>
          <Link to={`/products/${id}`}>
            <div className="mb-8 hover:cursor-pointer hover:scale-102 hover:shadow-md transition-all duration-400 ease-in-out">
            <div className="bg-[#FFFFFF]">
              <img className="w-full py-10 mb-2" src={image} alt="Imagem do produto" />
            </div>
            <small className="text-[#8F8F8F] text-[12px]">{category}</small>
            <h1 className="text-[#474747] text-[27px]">{name}</h1>
                {priceDiscount ? (
                    <div>
                        <span className='text-[24px] line-through text-[#8F8F8F] mr-2'>{`R$ ${price}`}</span>
                        <span className='text-[24px] text-[#1F1F1F]'>{`R$ ${priceDiscount}`}</span>
                    </div>
                ) : <span className='text-[24px] text-[#1F1F1F]'>{`R$ ${price}`}</span>}
            </div>
          </Link>
        </>
  )
}

export default ProductCard