import imagem1 from '../assets/imagens/musicas/bola.png'
import imagem3 from '../assets/imagens/musicas/bolsa.png'
import imagem4 from '../assets/imagens/musicas/garrafa.png'
import imagem2 from '../assets/imagens/musicas/camisa.png'
import { Link } from "react-router-dom";
import { MusicasStyle } from "../css/MusicasStyle";


const Musicas =()=> {
    return (
        <MusicasStyle>
                <h1>
                    <i class="fi fi-br-shopping-bag"></i>
                    Músicas
                </h1>
            <section className="musicas">
                <nav className="musica">
                    <img src={imagem3} className="imagem" />
                    <p>Bolsa Nike Brasilia Xs Duff 9.5</p>
                    <p className="preco">R$ 350,99</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
                <nav className="musica">
                    <img src={imagem4} className="imagem"/>
                    <p>Squeeze ASICS Aço Inoxidável 750 ml</p>
                    <p className="preco">R$ 75,90</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
                <nav className="musica">
                    <img src={imagem1} className="imagem" />
                    <p>Bola de Tênis Head Pro X 3</p>
                    <p className="preco">R$ 70,90</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
                <nav className="musica">
                    <img src={imagem2} className="imagem" />
                    <p>Camisa Brasil Azul e Branca Masculina</p>
                    <p className="preco">R$ 190,50</p>
                    <Link to='/contato'><a href="" class='btn'><h2 className="compre">COMPRE</h2></a></Link>
                </nav>
            </section>

        </MusicasStyle>
    )

}
export default Musicas