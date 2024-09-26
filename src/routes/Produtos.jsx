import { ProdutosStyle } from "../css/ProdutosStyle";
import imagem1 from '../assets/imagens/produtos/bola.png'
import imagem3 from '../assets/imagens/produtos/bolsa.png'
import imagem4 from '../assets/imagens/produtos/garrafa.png'
import imagem2 from '../assets/imagens/produtos/camisa.png'
import { Link } from "react-router-dom";


const Produtos =()=> {
    return (
        <ProdutosStyle>
                <h1>
                    <i class="fi fi-br-shopping-bag"></i>
                    Produtos
                </h1>
            <section className="produtos">
                <nav className="produto">
                    <img src={imagem3} className="imagem" />
                    <p>Bolsa Nike Brasilia Xs Duff 9.5</p>
                    <p className="preco">R$ 350,99</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
                <nav className="produto">
                    <img src={imagem4} className="imagem"/>
                    <p>Squeeze ASICS Aço Inoxidável 750 ml</p>
                    <p className="preco">R$ 75,90</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
                <nav className="produto">
                    <img src={imagem1} className="imagem" />
                    <p>Bola de Tênis Head Pro X 3</p>
                    <p className="preco">R$ 70,90</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
                <nav className="produto">
                    <img src={imagem2} className="imagem" />
                    <p>Camisa Brasil Azul e Branca Masculina</p>
                    <p className="preco">R$ 190,50</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
            </section>

        </ProdutosStyle>
    )

}
export default Produtos