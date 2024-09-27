import {SobreStyle} from '../css/SobreStyle'

const Sobre =()=> {
    return(
        <SobreStyle>
            <section className='Sobre'>
            
                <h1 className='titulo'> 
                    <i class="fi fi-br-info"></i>   
                    Sobre
                </h1>
                <h1 className='texto-sobre'>Musicality: Música de todas as décadas</h1>
                <h2 className='texto-sobre'>Conheça um pouco mais sobre a nossa loja!</h2>
                <p className='texto-sobre'>
                Desde 2014, oferecemos uma vasta gama de produtos musicais para todos os amantes da música. Nosso objetivo é proporcionar instrumentos e acessórios de alta qualidade a preços acessíveis, garantindo a satisfação de nossos clientes. Seja você um músico profissional ou um entusiasta, temos algo especial para você.
                </p>
            </section>
        </SobreStyle>
    )
}

export default Sobre