import {useState} from "react";
import burger from "../assets/burger.svg"
import close from "../assets/close.svg"
import {Link} from "react-router-dom";
import header from "../../public/assets/Header.png"
import "../css/main.css"

function Header(){
    const [showMenu, setShowMenu]=useState(true)

    return(
        <div>
            <nav className={"lien"} >
            <img src={header} alt="Logo"/>
            <ul style={{ paddingTop: '20px', paddingBottom: '20px' }}  className={`${showMenu ? "flex" : "hidden"}  w-full flex-col items-center text-white justify-center 
            bg-[#521248] absolute space-x-20 pb-5 sm:flex sm:relative sm:flex-row sm:pb-0`}>
                <li><Link to={"/"} className={"  inline-block py-2 mx-4 text-1xl hover:text-slate-400 sm:py-0"}>Accueil</Link></li>
                <li><Link to={"/"} className={" inline-block py-2 mx-4 text-1xl hover:text-slate-400 sm:py-0"}>Qui sommes nous?</Link></li>
                <li><Link to={"/"} className={" inline-block py-2 mx-4 text-1xl hover:text-slate-400 sm:py-0"}>Pédagogie</Link></li>
                <li><Link to={"/"} className={"  inline-block py-2 mx-4 text-1xl hover:text-slate-400 sm:py-0"}>Infos pratiques</Link></li>
                <li><Link to={"/"} className={" inline-block py-2 mx-4 text-1xl hover:text-slate-400 sm:py-0"}>Espace perso</Link></li>
                <li><Link to={"/"} className={" inline-block py-2 mx-4 text-1xl hover:text-slate-400 sm:py-0"}>Contact</Link></li>
            <button onClick={()=>setShowMenu(!showMenu)} className={"ml-auto sm:hidden"}>
                <img className={"w-6 bg-white"} src={showMenu ? close: burger} alt={"icône burger"}/>
            </button>
            </ul>
        </nav>
     </div>
    )
}
export default Header
