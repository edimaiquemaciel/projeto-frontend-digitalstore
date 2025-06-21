import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { useEffect, useState } from "react";

function HomePage() {

  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesCollection, setImagesCollection] = useState([]);
  const [imagesCollection2, setImagesCollection2] = useState([]);
  const [imageSpecial, setImageSpecial] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  let isMounted = true;
  let retryCount = 0;
  const maxRetries = 3;
  const retryDelay = 1000;

  const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        const productsRes = await fetch("https://digital-store-server-production.up.railway.app/allProducts");
        if (!productsRes.ok) throw new Error(`HTTP error! status: ${productsRes.status}`);
        const productsData = await productsRes.json();
        if (isMounted) setProducts(productsData.slice(0, -1));

        const imagesRes = await fetch("https://digital-store-server-production.up.railway.app/imagesSlideHome");
        if (!imagesRes.ok) throw new Error(`HTTP error! status: ${imagesRes.status}`);
        const imagesData = await imagesRes.json();
        if (isMounted) setImages(imagesData);

        const imagesCollection = await fetch("https://digital-store-server-production.up.railway.app/imageCollection");
        if (!imagesCollection.ok) throw new Error(`HTTP error! status: ${imagesCollection.status}`);
        const imagesCollectionData = await imagesCollection.json();
        if (isMounted) setImagesCollection(imagesCollectionData);

        const imagesCollection2 = await fetch("https://digital-store-server-production.up.railway.app/imageCollection2");
        if (!imagesCollection2.ok) throw new Error(`HTTP error! status: ${imagesCollection2.status}`);
        const imagesCollectionData2 = await imagesCollection2.json();
        if (isMounted) setImagesCollection2(imagesCollectionData2);

        const imagesSpecial = await fetch("https://digital-store-server-production.up.railway.app/imageSpecial");
        if (!imagesSpecial.ok) throw new Error(`HTTP error! status: ${imagesSpecial.status}`);
        const imagesSpecialData = await imagesSpecial.json();
        if (isMounted) setImageSpecial(imagesSpecialData);

      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        
        if (isMounted && retryCount < maxRetries) {
          retryCount++;
          setError(`Tentando novamente... (${retryCount}/${maxRetries})`);
          setTimeout(fetchAllData, retryDelay);
        } else if (isMounted) {
          setError("Não foi possível carregar os dados após várias tentativas.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAllData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }
  
  return (
    <div className="bg-[#F9F8FE]">
      <Gallery
        className={`w-full flex items-center justify-end bg-[#F5F5F5]`}
        showIndicators={true}
        images={images}
        width="1440px"
        height="681px"
      />
      <Section title="Coleções em destaque" className="w-full flex flex-col items-start justify-between gap-5 px-[110px] pt-9 mb-30">
        <div className="w-full flex items-center justify-between">
          {imagesCollection.map((image, index) => (
            <img key={index} className="w-[calc(33%-6px)] rounded-lg" src={image.src} alt="" />
          ))}
        </div>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center" className="flex flex-col items-center justify-between gap-6 mb-30">
        <div className="w-[100%] flex items-center justify-center gap-11">
          {imagesCollection2.map((image, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-[50%] bg-white">
                <img className="w-[64px] h-[64px]" src={image.src} alt="" />
              </div>
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Produtos em alta" link={{text: "Ver todos ➔", link: "/products"}} className="flex flex-col items-start justify-between gap-6 px-[110px]">
        <ProductListing products={products}/>
      </Section>
      <Section>
        <div className="w-full flex items-start justify-start gap-20 pl-16 py-28 bg-white mt-32">
          <div className="relative">
            <img className="w-full z-40 relative" src={imageSpecial[0].image} alt="Tenis" />
            <div className="w-[459px] h-[280px] absolute top-[107px] left-[305px] -translate-x-1/2 -translate-y-1/2 rounded-tl-[250px] rounded-tr-[250px] bg-gradient-to-b from-[rgba(66,0,255,0.1)] to-[rgba(255,255,255,0)]"></div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-between gap-5 max-w-[38%]" >
            <p className="text-[#C92071] text-[0.9rem] mb-2 font-bold">Oferta especial</p>
            <h2 className="text-[3.2rem] font-extrabold leading-[95%]">Air Jordan edição de colecionador</h2>
            <p 
              className="text-[#555] mb-4 text-left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
            <button className="bg-[#C92071] text-[#F5F5F5] border-none py-2 px-[3.3rem] rounded-[5px] cursor-pointer font-medium text-sm">Ver oferta</button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default HomePage