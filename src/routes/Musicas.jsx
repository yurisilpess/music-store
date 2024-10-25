import imagem1 from '../assets/imagens/musicas/tdoss.png';
import imagem3 from '../assets/imagens/musicas/sns.png';
import imagem4 from '../assets/imagens/musicas/nlu.png';
import imagem2 from '../assets/imagens/musicas/hope.png';
import imagem5 from '../assets/imagens/musicas/linging.png';
import imagem6 from '../assets/imagens/musicas/paramore.png';
import imagem7 from '../assets/imagens/musicas/nggyu.png';
import imagem8 from '../assets/imagens/musicas/fhd.png';
import { Link } from 'react-router-dom';
import { ParallaxHover } from 'react-parallax-hover';
import { MusicasStyle } from "../css/MusicasStyle";

const Musicas = () => {
    return (
        <MusicasStyle>
            <h1>
                <i className="fi fi-br-shopping-bag"></i>
                Músicas
            </h1>
            <section className="musicas">
                <nav className="musica">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem1} className="imagem" alt="Eminem - The Death of Slim Shady" />
                        </ParallaxHover>
                    </div>
                    <p>Eminem - The Death of Slim Shady</p>
                    <p className="preco">BEST-SELLING</p>
                    <a href="https://open.spotify.com/album/31hcgCSu4mlA82syOFItur?si=7m_I0FdSRbadXRwKip_k2w" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
                <nav className="musica2">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem4} className="imagem" alt="Kendrick Lamar - Not Like Us" />
                        </ParallaxHover>
                    </div>
                    <p>Kendrick Lamar - Not Like Us</p>
                    <p className="preco">MOST-STREAMED SONG</p>
                    <a href="https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3?si=68617775eae24212" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
                <nav className="musica3">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem3} className="imagem" alt="Sabrina Carpenter - Short n' Sweet" />
                        </ParallaxHover>
                    </div>
                    <p>Sabrina Carpenter - Short n' Sweet</p>
                    <p className="preco">NEWEST POP ALBUM</p>
                    <a href="https://open.spotify.com/album/3iPSVi54hsacKKl1xIR2eH?si=uIeWQYqxQnGaYLQdQnUTfQ" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
                <nav className="musica4">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem2} className="imagem" alt="NF - HOPE" />
                        </ParallaxHover>
                    </div>
                    <p>RECOMMENDED: A MUST-LISTEN ALBUM</p>
                    <p className="preco">NF - HOPE</p>
                    <a href="https://open.spotify.com/album/6zaisPwfcIAfdUGPj3mmGY?si=bR-sTAsuQoOxzdwKK4EkrQ" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
                <nav className="musica5">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem5} className="imagem" alt="Your Phone Linging" />
                        </ParallaxHover>
                    </div>
                    <p>MOST TRENDING MEME SONG</p>
                    <p className="preco">Your Phone Linging</p>
                    <a href="https://open.spotify.com/track/4fspFnyUkNJHu2NmQiI3LX?si=0d529f9b5fa64756" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
                <nav className="musica6">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem6} className="imagem" alt="Paramore - Paramore" />
                        </ParallaxHover>
                    </div>
                    <p>A BELOVED ALBUM FROM THE 2010s</p>
                    <p className="preco">Paramore - Paramore</p>
                    <a href="https://open.spotify.com/album/4sgYpkIASM1jVlNC8Wp9oF?si=NYt-zURvTeWPEpeCpQNK6A" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
                <nav className="musica7">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem7} className="imagem" alt="Rick Astley - Never Gonna Give You Up" />
                        </ParallaxHover>
                    </div>
                    <p>Rick Astley - Never Gonna Give You Up</p>
                    <p className="preco">A CALLBACK TO THE 80s</p>
                    <Link to='/RickRoll' className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </Link>
                </nav>
                <nav className="musica8">
                    <div className="prlx">
                        <ParallaxHover
                            width={325}
                            height={325}
                            borderRadius={14}
                            rotation={8}
                            shadow={4}
                            shine={1.5}
                            scale={1}
                        >
                            <img src={imagem8} className="imagem" alt="J. Cole - 2014 Forest Hill Drive" />
                        </ParallaxHover>
                    </div>
                    <p>J. Cole - 2014 Forest Hill Drive</p>
                    <p className="preco">FAN FAVORITE</p>
                    <a href="https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG?si=ZlgcJsCIT_ilkB1AbBv47Q" className='btn'>
                        <h2 className="compre">LISTEN NOW</h2>
                    </a>
                </nav>
            </section>
        </MusicasStyle>
    );
};

export default Musicas
