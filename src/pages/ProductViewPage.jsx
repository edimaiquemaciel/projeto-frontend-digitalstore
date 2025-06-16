import Gallery from "../components/Gallery";
import { useParams } from "react-router-dom";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import ProductListing from "../components/ProductListing";

const products = [
  {
    id: 1,
    name: "Tênis Air Jordan 1 High Original Masculino",
    reference: "38416711",
    stars: 4.8,
    rating: 125,
    description: "Design retrô com tecnologia moderna, ideal para quem busca conforto, estilo urbano e performance. Um clássico que combina autenticidade com qualidade premium.",
    image: "/tenis-thumb.png",
    price: 3500,
    priceDiscount: 1500,
    category: "Tênis"
  },
  {
    id: 2,
    name: "Tênis Air Jordan 1 High Retrô Clássico",
    reference: "38416712",
    stars: 4.9,
    rating: 98,
    description: "O modelo une tradição e inovação em um visual marcante. Perfeito para uso diário ou esportivo, com conforto extremo e materiais de alta qualidade.",
    image: "/tenis-thumb.png",
    price: 5000,
    priceDiscount: 1800,
    category: "Tênis"
  },
  {
    id: 3,
    name: "Tênis Levi's Couro Casual Premium Masculino",
    reference: "38416713",
    stars: 4.5,
    rating: 80,
    description: "Couro legítimo e acabamento refinado em um tênis versátil que combina com diversos estilos. Ideal para quem busca elegância e conforto no dia a dia.",
    image: "/tenis-thumb.png",
    price: 550,
    priceDiscount: 250,
    category: "Tênis"
  },
  {
    id: 4,
    name: "Tênis Retro Runner Estilo Urbano Casual",
    reference: "38416714",
    stars: 4.2,
    rating: 67,
    description: "Inspirado nos clássicos, este modelo oferece conforto e um visual vintage atualizado. Seu solado aderente e design anatômico garantem estabilidade.",
    image: "/tenis-thumb.png",
    price: 800,
    priceDiscount: 350,
    category: "Tênis"
  },
  {
    id: 5,
    name: "Tênis Nike SuperRep Go Treino Performance",
    reference: "38416715",
    stars: 4.6,
    rating: 150,
    description: "Ideal para treinos de alta intensidade, com amortecimento eficiente e suporte lateral. Leve, respirável e com design moderno para performance e estilo.",
    image: "/tenis-thumb.png",
    price: 750,
    priceDiscount: 450,
    category: "Tênis"
  },
  {
    id: 6,
    name: "Tênis Levi's Couro Social Casual Masculino",
    reference: "38416716",
    stars: 4.4,
    rating: 45,
    description: "Sofisticado e resistente, o tênis em couro combina perfeitamente com looks casuais e formais. Confortável e durável para uso prolongado com elegância.",
    image: "/tenis-thumb.png",
    price: 550,
    priceDiscount: 250,
    category: "Tênis"
  },
  {
    id: 7,
    name: "Tênis Retro Runner Clássico Confortável",
    reference: "38416717",
    stars: 4.1,
    rating: 38,
    description: "Modelo retrô com toque contemporâneo. Seu design atemporal e conforto prolongado fazem deste tênis uma excelente escolha para todos os momentos.",
    image: "/tenis-thumb.png",
    price: 800,
    priceDiscount: 350,
    category: "Tênis"
  },
  {
    id: 8,
    name: "Tênis Nike SuperRep Go Academia Casual",
    reference: "38416718",
    stars: 4.7,
    rating: 190,
    description: "Com ajuste firme e materiais respiráveis, é a escolha ideal para quem treina pesado sem abrir mão de conforto e estilo, tanto na academia quanto fora dela.",
    image: "/tenis-thumb.png",
    price: 750,
    priceDiscount: 450,
    category: "Tênis"
  }
];

const productsHigh = [
    {
      id: 1,
      name: "Air Jordan 1 High",
      image: "/product-thumb-1.jpeg",
      price: 3500,
      priceDiscount: 1500,
      category: "Tênis"
    },
    {
      id: 2,
      name: "Air Jordan 1 High",
      image: "/product-thumb-2.jpeg",
      price: 5000,
      priceDiscount: 1800,
      category: "Tênis"
    },
    {
      id: 3,
      name: "Tênis Levi's de Couro",
      image: "/product-thumb-3.jpeg",
      price: 550,
      priceDiscount: 250,
      category: "Tênis"
    },
    {
      id: 4,
      name: "Tênis Retro Runner",
      image: "/product-thumb-4.jpeg",
      price: 800,
      priceDiscount: 350,
      category: "Tênis"
    }
];





const images = [
    {
      image: "/tenis-galeria.png",
      imageThumb: "/tenis-thumb.png",
      color: "#E2E3FF"
    },
    {
      image: "/tenis-galeria.png",
      imageThumb: "/tenis-thumb.png",
      color: "#FFE8BC"
    },
    {
      image: "/tenis-galeria.png",
      imageThumb: "/tenis-thumb.png",
      color: "#FFC0BC"
    },
    {
      image: "/tenis-galeria.png",
      imageThumb: "/tenis-thumb.png",
      color: "#DEC699"
    },
    {
      image: "/tenis-galeria.png",
      imageThumb: "/tenis-thumb.png",
      color: "#E8DFCF"
    }
  ];

  const sizes = [39, 40, 41, 42, 43];
      const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

function ProductViewPage() {
    const {id} = useParams();
     const product = products.find(p => p.id === parseInt(id));
  return (
    <div className="px-[100px] mb-48 flex flex-col">
        <section className="flex items-start gap-[43.27px] mb-56">
          <Gallery 
          showThumbs={true} 
          showItemNavigators={true} 
          images={images} width="700px" height="570px" 
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