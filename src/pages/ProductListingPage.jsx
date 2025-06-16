import { Dropdown } from 'primereact/dropdown';
        
import { useState } from 'react';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

function ProductListingPage() {
    const options = [
        { name: 'Menor preço', code: 'menor_preco' },
        { name: 'Maior preço', code: 'maior_preco' },
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const valueTemplate = (option) => {
        return (
            <div>
                <h4 className='text-[15px]'>Ordenar por: <span className='text-sm'>{option.name}</span></h4>
            </div>
        );
    };

    const brands  = [
        { text: 'Adidas', value: 'adidas' },
        { text: 'Calenciaga', value: 'calenciaga' },
        { text: 'K-Swiss', value: 'kswiss' },
        { text: 'Nike', value: 'nike' }
    ];


    const categories  = [
        { text: 'Esporte e lazer', value: 'esporte_lazer' },
        { text: 'Casual', value: 'casual' },
        { text: 'Utilitário', value: 'utilitario' },
        { text: 'Corrida', value: 'corrida' }
    ];

    const genders  = [
        { text: 'Masculino', value: 'masc' },
        { text: 'Feminino', value: 'fem' },
        {text: 'Unisex', value: 'unisex'}
    ];

    const status  = [
        { text: 'Novo', value: 'novo' },
        { text: 'Usado', value: 'usado' }
    ];

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
    {
      id: 9,
      name: "Tênis Levi's de Couro",
      image: "/Layer1.png",
      price: 550,
      priceDiscount: 250,
      category: "Tênis"
    }
];


  return (
    <div className='flex gap-6 bg-[#F9F8FE] pt-10 px-[100px] pb-36'>
        <aside className='w-[308px] flex flex-col gap-4 bg-[#F9F8FE]'>
            <Dropdown 
                options={options} 
                optionLabel='name' 
                value={selectedOption} 
                onChange={(e) => setSelectedOption(e.target.value)}
                valueTemplate={valueTemplate}
                className='w-[308px]'
            />
            <div className='flex flex-col justify-between gap-5 pt-6 pb-[30px] px-7 bg-white'>
                <div>
                    <h4 className='text-[#474747] font-semibold'>
                        Filtrar por
                    </h4>
                </div>
                <hr class="border-t-[1.8px] border-[#CCCCCC] w-full"/>
                <FilterGroup title="Marca" inputType="checkbox" options={brands}/>
                <FilterGroup title="Categoria" inputType="checkbox" options={categories}/>
                <FilterGroup title="Gênero" inputType="checkbox" options={genders}/>
                <FilterGroup title="Estado" inputType="radio" options={status}/>
            </div>
        </aside>
        <main className='flex-1'>
          <Section
              className="flex flex-col items-center justify-center gap-[42px]"
              title={`Resultados para 'Tênis' - ${products.length} produtos` }
              titleAlign='left'
              classNameTitle='text-[16px] font-bold'
          >
              <ProductListing products={products} />
          </Section>
        </main>
    </div>
  )
}

export default ProductListingPage