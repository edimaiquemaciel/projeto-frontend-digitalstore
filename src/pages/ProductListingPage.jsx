import { Dropdown } from 'primereact/dropdown';
        
import { useEffect, useRef, useState } from 'react';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { useSearchParams} from 'react-router-dom';

function ProductListingPage() {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const initialSearch = useRef(searchParams.get('filter'));
    

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

    useEffect(() => {

        const fetchAllData = async () => {
          try {
            setLoading(true);
    
            const productsRes = await fetch("https://digital-store-server-production.up.railway.app/allProducts");
            if (!productsRes.ok) {
              throw new Error(`HTTP error! status: ${productsRes.status}`);
            }
            const productsData = await productsRes.json();
            setAllProducts(productsData);
    
          } catch (err) {
            console.error("Erro ao buscar dados:", err);
            setError("Não foi possível carregar os dados.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchAllData();
      }, []);

      useEffect(() => {
        if (allProducts.length > 0) {

          const currentFilter = searchParams.get('filter');
          const filterToUse = initialSearch.current && !currentFilter 
            ? initialSearch.current 
            : currentFilter;
          
          if (initialSearch.current && currentFilter) {
            initialSearch.current = null;
          }

          const normalizedFilter = filterToUse
            ? filterToUse.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
            : null;

          const filtered = normalizedFilter
            ? allProducts.filter(product => {
                const normalizedName = product.name
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase();
                
                const normalizedCategory = product.category
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase();

                return (
                  normalizedName.includes(normalizedFilter) ||
                  normalizedCategory.includes(normalizedFilter)
                );
              })
            : allProducts;

          setProducts(filtered);
        }
      }, [searchParams, allProducts]);
    
      if (loading) {
        return <div>Carregando dados...</div>;
      }
    
      if (error) {
        return <div>Erro: {error}</div>;
      }


  return (
    <div className='flex gap-6 bg-[#F9F8FE] pt-10 px-[100px] pb-36'>
        <aside className='w-[308px] flex flex-col gap-4 bg-[#F9F8FE]'>
            <Dropdown 
                options={options} 
                optionLabel='name' 
                value={selectedOption} 
                onChange={(e) => setSelectedOption(e.value)}
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
              title={`Resultados para '${searchParams?.get('filter') ? searchParams.get('filter') : "Tênis"}' - ${products.length} produtos` }
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