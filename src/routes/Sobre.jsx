import {SobreStyle} from '../css/SobreStyle'

const Sobre =()=> {
    return(
        <SobreStyle>
            <section className='Sobre'>
            
                <h1 className='titulo'> 
                    <i class="fi fi-br-info"></i>   
                    Sobre
                </h1>
                <h1 className = 'texto-sobre'>Musicality: Musical-idade de todas décadas</h1>
                <h2 className='texto-sobre'>Conheça um pouco mais sobre a nossa empresa!</h2>
                <p className='texto-sobre'>
                Desde 2011 oferecemos produtos para impulsionar essa metodologia, cujo objetivo estar em unir preços acessíveis à confiança de nossos consumidores, ofertando uma variedade única de produtos relacionados a esportes, itens de academia e até recursos voltados para a fisioterapia, abrangendo uma quantidade considerável de diferentes perfis.
                </p>
            </section>
        </SobreStyle>
    )
}

export default Sobre