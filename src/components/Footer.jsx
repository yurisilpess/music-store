import {FooterStyle} from '../css/FooterStyle'

const Footer =()=> {
    return(
        <FooterStyle>
            <section className='Footer'>
                <h5> 
                    @2024 - Todos Direitos Reservados - SportMax
                </h5>
                    <a href="https://github.com/jota0802/ProjetoFrontEnd-CP1/blob/main/README.md"><i class="fi fi-brands-github"></i></a>
                    <a href=""><i class="fi fi-brands-whatsapp"></i></a>
                    <a href=""><i class="fi fi-brands-linkedin"></i></a>
                    <a href=""><i class="fi fi-brands-instagram"></i></a>
            </section>
        </FooterStyle>    
        
    )
}
export default Footer