import ProductCard from "./ProductCard";

function ProductListing({products}) {
  
  return (
    <div className={`w-full flex items-center justify-between flex-wrap ${products.length < 4 ? "gap-[23.5px] w-full justify-start" : ""}`}>
        {products?.map((product, index) => (
          <ProductCard key={index} image={product.image} category={product.category} name={product.name} price={product.price} priceDiscount={product.priceDiscount} id={product.id} />
        ))}
    </div>
  )
}

export default ProductListing