import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import ProductListing from "../components/ProductListing";
import { useEffect, useState } from "react";


function ProductViewPage() {
    const [imagesWithThumb, setImagesWithThumb] = useState([]);
    const [productsHigh, setProductsHigh] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sizes = [39, 40, 41, 42, 43];
    const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];
  
    const {id} = useParams();

    useEffect(() => {
      const fetchAllData = async () => {
        try {
          setLoading(true);
  
          const productsRes = await fetch("https://digital-store-server-production.up.railway.app/allProducts");
          if (!productsRes.ok) {
            throw new Error(`HTTP error! status: ${productsRes.status}`);
          }
          const productsData = await productsRes.json();
          setProductsHigh(productsData.slice(0,-5));

          const productsDetails = await fetch("https://digital-store-server-production.up.railway.app/allProductsDetails");
          if (!productsDetails.ok) {
            throw new Error(`HTTP error! status: ${productsDetails.status}`);
          }
          const productsDetailsData = await productsDetails.json();
          setProductDetails(productsDetailsData);
  
          const imagesRes = await fetch("https://digital-store-server-production.up.railway.app/imagesWithThumb");
          if (!imagesRes.ok) {
            throw new Error(`HTTP error! status: ${imagesRes.status}`);
          }
          const imagesData = await imagesRes.json();
          setImagesWithThumb(imagesData);
  
        } catch (err) {
          console.error("Erro ao buscar dados:", err);
          setError("Não foi possível carregar os dados.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchAllData();
    }, []);

    if (loading) {
      return <div>Carregando dados...</div>;
    }
  
    if (error) {
      return <div>Erro: {error}</div>;
    }

    const product = productDetails.find(p => p.id === parseInt(id));


  return (
    <div className="px-[100px] mb-48 flex flex-col">
      <h1 className="my-6"><span className="font-bold">Home</span> / Produtos / Tênis / Nike / {product.name} </h1>
        <section className="flex items-start gap-[43.27px] mb-56">
          <Gallery 
          showThumbs={true} 
          showItemNavigators={true} 
          images={imagesWithThumb} width="700px" height="570px" 
          className="flex flex-1" radius="4px"
          />
          <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          description={product.description}
          price={product.price}
          priceDiscount={product.priceDiscount}
          >
            <ProductOptions options={sizes} shape="square" radius="4px"/>
            <ProductOptions options={colors}  shape="circle"/>
          </BuyBox>
        </section>
        <Section className="flex flex-col gap-6" title="Produtos relacionados" link={{text: "Ver todos ➔", link: "/products"}}>
          <ProductListing products={productsHigh} />
        </Section>
    </div>
  )
}

export default ProductViewPage