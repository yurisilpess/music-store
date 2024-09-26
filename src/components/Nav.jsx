
import { NavStyle } from "../css/NavStyle";
import { Link } from "react-router-dom";

const Nav =()=>{

    return(
        <NavStyle>
            <nav className="cover"></nav>
            <section className="nav">
                <h1 className="Marca">Musicality</h1>
                <Link to ='/' className="navlink">HOME</Link>
                <Link to ='/Produtos' className="navlink">PRODUTOS</Link>
                <Link to ='/Contato' className="navlink">CONTATO</Link>
                <Link to ='/Sobre' className="navlink">SOBRE</Link>
            </section>
        </NavStyle>
    )
}
export default Nav