import ProductCard from "./ProductCard";

function ProductListing({products}) {
  
  return (
    <div className="flex items-center justify-between flex-wrap">
        {products.map(product => (
          <ProductCard image={product.image} category={product.category} name={product.name} price={product.price} priceDiscount={product.priceDiscount} id={product.id} />
        ))}
    </div>
  )
}

export default ProductListing