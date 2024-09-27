import imagem1 from '../assets/imagens/musicas/tdoss.png'
import imagem3 from '../assets/imagens/musicas/sns.png'
import imagem4 from '../assets/imagens/musicas/nlu.png'
import imagem2 from '../assets/imagens/musicas/hope.png'
import imagem5 from '../assets/imagens/musicas/linging.png'
import imagem6 from '../assets/imagens/musicas/paramore.png'
import imagem7 from '../assets/imagens/musicas/nggyu.png'
import imagem8 from '../assets/imagens/musicas/fhd.png'
import { Link} from 'react-router-dom'
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
                    <div>
                        <img src={imagem1} className="imagem" />
                        <a href="https://open.spotify.com/album/31hcgCSu4mlA82syOFItur?si=7m_I0FdSRbadXRwKip_k2w"/>
                    </div>
                    <p>Eminem - The Death of Slim Shady</p>
                    <p className="preco">BEST-SELLING</p>
                    <a href="https://open.spotify.com/album/31hcgCSu4mlA82syOFItur?si=7m_I0FdSRbadXRwKip_k2w" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
                <nav className="musica2">
                    <img src={imagem4} className="imagem"/>
                    <p>Kendrick Lamar - Not Like Us</p>
                    <p className="preco">MOST-STREAMED SONG</p>
                    <a href="https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3?si=68617775eae24212" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
                <nav className="musica3">
                    <img src={imagem3} className="imagem" />
                    <p>Sabrina Carpenter - Short n' Sweet</p>
                    <p className="preco">NEWEST POP ALBUM</p>
                    <a href="https://open.spotify.com/album/3iPSVi54hsacKKl1xIR2eH?si=uIeWQYqxQnGaYLQdQnUTfQ" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
                <nav className="musica4">
                    <img src={imagem2} className="imagem" />
                    <p>RECOMMENDED: A MUST-LISTEN ALBUM</p>
                    <p className="preco">NF - HOPE</p>
                    <a href="https://open.spotify.com/album/6zaisPwfcIAfdUGPj3mmGY?si=bR-sTAsuQoOxzdwKK4EkrQ" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
                <nav className="musica5">
                    <img src={imagem5} className="imagem" />
                    <p>MOST TRENDING MEME SONG</p>
                    <p className="preco">Your Phone Linging</p>
                    <a href="https://open.spotify.com/track/4fspFnyUkNJHu2NmQiI3LX?si=0d529f9b5fa64756" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
                <nav className="musica6">
                    <img src={imagem6} className="imagem" />
                    <p>A BELOVED ALBUM FROM THE 2010s</p>
                    <p className="preco">Paramore - Paramore</p>
                    <a href="https://open.spotify.com/album/4sgYpkIASM1jVlNC8Wp9oF?si=NYt-zURvTeWPEpeCpQNK6A" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
                <nav className="musica7">
                    <img src={imagem7} className="imagem" />
                    <p>Rick Astley - Never Gonna Give You Up</p>
                    <p className="preco">A CALLBACK TO THE 80s</p>
                    <Link to='/RickRoll' class='btn'><h2 className="compre">LISTEN NOW</h2></Link>
                </nav>
                <nav className="musica8">
                    <img src={imagem8} className="imagem" />
                    <p> J. Cole - 2014 Forest Hill Drive</p>
                    <p className="preco">FAN FAVORITE</p>
                    <a href="https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG?si=ZlgcJsCIT_ilkB1AbBv47Q" class='btn'><h2 className="compre">LISTEN NOW</h2></a>
                </nav>
            </section>

        </MusicasStyle>
    )

}
export default Musicas