import logoFooter from "../assets/logo-footer.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import Logo from "./Logo";
import Informations from "./Informations";

import { Divider } from 'primereact/divider';
        
function Footer() {
  const informations = [
    {
        "text": "Sobre Drip Store",
        "link": "/about"
    },
    {
        "text": "Segurança",
        "link": "/seguranca"
    },
    {
      "text": "Wishlist",
      "link": "/wishlist"
    },
    {
      "text": "Blog",
      "link": "/blog"
    },
    {
      "text": "Trabalhe conosco",
      "link": "/trabalhe-conosco"
    },
    {
      "text": "Meus pedidos",
      "link": "/pedidos"
    }
    ]

    const categorias = [
    {
        "text": "Camisetas",
        "link": "/camisetas"
    },
    {
        "text": "Calças",
        "link": "/calcas"
    },
    {
      "text": "Bonés",
      "link": "/bones"
    },
    {
      "text": "Headphones",
      "link": "/headphones"
    },
    {
      "text": "Tênis",
      "link": "/tenis"
    }
    ]
    const contato = [
    {
        "text": "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161"
    },
    {
        "text": "(85) 3051-3411"
    }
    ]


  return (
    <footer className="flex flex-col items-center justify-between bg-[#1F1F1F] px-[100px] pb-6">
      <div className="w-full flex items-start justify-between pt-20 pb-9 text-white">
        <div className="w-[307px] flex flex-col items-start justify-between gap-8">
          <Logo logo={logoFooter} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="w-[40%] flex items-center justify-between">
            <a href="https://facebook.com" target="_blank"><img src={facebook} alt="facebook logo" /></a>
            <a href="https://instagram.com" target="_blank"><img src={instagram} alt="instagram logo" /></a>
            <a href="https://x.com" target="_blank"><img src={twitter} alt="twitter logo" /></a>
          </div>
        </div>
        <div className="flex items-start justify-between w-[55%]">
          <Informations title="Informação" informations={informations}/>
          <Informations title="Categorias" informations={categorias}/>
          <Informations title="Contato" informations={contato}/>
        </div>
      </div>
      <hr className="border-t-[0.5px] border-[#626262] my-8 w-full"/>
      <p className="text-white">© 2025 Digital Store</p>
    </footer>
  )
}

export default Footer