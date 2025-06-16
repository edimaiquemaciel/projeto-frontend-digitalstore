import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

function HomePage() {
  const images = [
    {
      image: "/White-Sneakers2.png",
      alt: 'Nike Air',
      title: 'Queima de estoque Nike 🔥',
      subtitle: 'Melhores ofertas personalizadas',
      description:
        'Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod inure consectetur.',
      buttonLabel: 'Ver Ofertas',
    },
    {
      image: "/home-slide-1.jpeg",
    },
    {
      image: "/home-slide-2.jpeg",
    },
    {
      image: "/home-slide-3.jpeg",
    },
    {
      image: "/home-slide-4.jpeg",
    },
    {
      image: "/home-slide-5.jpeg",
    },
    {
      image: "/home-slide-6.jpeg",
    },
    {
      image: "/home-slide-7.jpeg",
    },
    {
      image: "/home-slide-8.jpeg",
    },
  ];

  const imageCollection = [
    {
      src: "/collection-1.png"
    },
    {
      src: "/collection-2.png"
    },
    {
      src: "/collection-3.png"
    }
  ]
  const imageCollection2 = [
    {
      src: "/camisetas.png",
      text: "Camisetas"
    },
    {
      src: "/calcas.png",
      text: "Calças"
    },
    {
      src: "/bone2.png",
      text: "Bonés"
    },
    {
      src: "/headphones.png",
      text: "Headphones"
    },
    {
      src: "/tenis.png",
      text: "Tênis"
    }
  ]

  const products = [
    {
      id: 1,
      name: "Air Jordan 1 High",
      image: "/Layer1.png",
      price: 3500,
      priceDiscount: 1500,
      category: "Tênis"
    },
    {
      id: 2,
      name: "Air Jordan 1 High",
      image: "/Layer1.png",
      price: 5000,
      priceDiscount: 1800,
      category: "Tênis"
    },
    {
      id: 3,
      name: "Tênis Levi's de Couro",
      image: "/Layer1.png",
      price: 550,
      priceDiscount: 250,
      category: "Tênis"
    },
    {
      id: 4,
      name: "Tênis Retro Runner",
      image: "/Layer1.png",
      price: 800,
      priceDiscount: 350,
      category: "Tênis"
    },
    {
      id: 5,
      name: "Nike SuperRep Go",
      image: "/Layer1.png",
      price: 750,
      priceDiscount: 450,
      category: "Tênis"
    },
    {
      id: 6,
      name: "Tênis Levi's de Couro",
      image: "/Layer1.png",
      price: 550,
      priceDiscount: 250,
      category: "Tênis"
    },
    {
      id: 7,
      name: "Tênis Retro Runner",
      image: "/Layer1.png",
      price: 800,
      priceDiscount: 350,
      category: "Tênis"
    },
    {
      id: 8,
      name: "Nike SuperRep Go",
      image: "/Layer1.png",
      price: 750,
      priceDiscount: 450,
      category: "Tênis"
    },
];

  
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
          {imageCollection.map(image => (
            <img className="w-[calc(33%-6px)] rounded-lg" src={image.src} alt="" />
          ))}
        </div>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center" className="flex flex-col items-center justify-between gap-6 mb-30">
        <div className="w-[100%] flex items-center justify-center gap-11">
          {imageCollection2.map(image => (
            <div className="flex flex-col items-center justify-center gap-2">
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
            <img className="w-full z-40 relative" src="/Laye.png" alt="Tenis" />
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