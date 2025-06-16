import Logo from "./Logo";
import logoHeader from "../assets/logo-header.svg";
import carrinho from "../assets/mini-cart.svg";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="w-full px-4 py-6 md:px-[100px] md:py-11 flex flex-col gap-4 md:gap-8 bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="w-full md:w-auto flex justify-between items-center">
          <Logo logo={logoHeader} />
          <img src={carrinho} alt="Ícone carrinho" className="md:hidden" />
        </div>

        <IconField className="w-full md:w-[38vw]">
          <InputIcon className="pi pi-search"  style={{cursor: "pointer"}}/>
          <InputText 
            placeholder="Pesquisar produto..." 
            className="w-full"
            style={{backgroundColor: "#F8F8F8"}}
          />
        </IconField>

        <div className="flex items-center justify-between w-full md:w-auto lg:w-[30%] gap-4">
          <div className="w-full flex items-center justify-end md:w-[240px] md:justify-around  gap-4">
            <a href="#" className="underline text-[#474747] text-sm md:text-base">Cadastre-se</a>
            <Button 
              label="Entrar" 
              className="text-sm md:text-base"
              style={{
                backgroundColor: "#C92071", 
                border: "none", 
                width: "100px", 
                height: "36px",
                fontSize: "14px"
              }}
            />
          </div>
          <img src={carrinho} alt="Ícone carrinho" className="hidden md:block" />
        </div>
      </div>
      
      <NavBar />
    </header>
  )
}

export default Header