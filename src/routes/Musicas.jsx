import imagem1 from '../assets/imagens/musicas/tdoss.png'
import imagem3 from '../assets/imagens/musicas/sns.png'
import imagem4 from '../assets/imagens/musicas/nlu.png'
import imagem2 from '../assets/imagens/musicas/hope.png'
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
                    <img src={imagem1} className="imagem" />
                    <p>EMINEM - The Death of Slim Shady</p>
                    <p className="preco">BEST-SELLING</p>
                    <Link to='/login'><a href="" class='btn'><h2 className="compre">LISTEN NOW</h2></a></Link>
                </nav>
                <nav className="musica2">
                    <img src={imagem4} className="imagem"/>
                    <p>Kendrick Lamar - Not Like Us</p>
                    <p className="preco">MOST-STREAMED</p>
                    <Link to='/login'><a href="" class='btn'><h2 className="compre">LISTEN NOW</h2></a></Link>
                </nav>
                <nav className="musica3">
                    <img src={imagem3} className="imagem" />
                    <p>Sabrina Carpenter - Short n' Sweet</p>
                    <p className="preco">NEWEST POP ALBUM</p>
                    <Link to='/login'><a href="" class='btn'><h2 className="compre">LISTEN NOW</h2></a></Link>
                </nav>
                <nav className="musica4">
                    <img src={imagem2} className="imagem" />
                    <p>RECOMMENDED: A MUST-LISTEN ALBUM</p>
                    <p className="preco">NF - HOPE</p>
                    <Link to='/login'><a href="" class='btn'><h2 className="compre">LISTEN NOW</h2></a></Link>
                </nav>
            </section>

        </MusicasStyle>
    )

}
export default Musicas