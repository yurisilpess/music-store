import { RickRollStyle } from "../css/RickRollStyle";
import imagem9 from '../assets/imagens/musicas/rickroll.gif'

const RickRoll =()=> {
    return (
        <RickRollStyle>
            <section className="musicas">
                <nav className="musica">
                    <img src={imagem9} className="imagem"/>
                </nav>
            </section>
                <h1>
                    You have been Rick Rolled!
                </h1>
        </RickRollStyle>
    )

}
export default RickRoll