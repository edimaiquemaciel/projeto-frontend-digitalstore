import { NavLink } from 'react-router-dom';

function NavBar() {
    const items = [
    { label: 'Home', url: '/' },
    { label: 'Produtos', url: '/products' },
    { label: 'Categorias', url: '/categorias' },
    { label: 'Meus Pedidos', url: '/pedidos' }
  ];


  return (
    <nav className="flex items-center justify-between w-full md:w-[33.2%]">
        {items.map(item => ( 
            <NavLink 
            key={item.url}
            to={item.url} 
            className={({ isActive }) =>`pt-1 border-b-2 font-medium ${isActive ? 'border-b-2 border-[#C92071] text-[#C92071]' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`} > {item.label}
            </NavLink>
        ))}

    </nav>
  )
}

export default NavBar