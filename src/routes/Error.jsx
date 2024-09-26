import {ErrorStyle} from '../css/ErrorStyle'

const Error =()=>{
    return(
        <ErrorStyle>
                <i class="fi fi-rr-cross-circle"></i>
            <section className='error'>
                <h1 className='texto-error'>
                    Error 404
                    </h1>
                <p className='texto-error'>Pagina não encontrada</p>
            </section>
        </ErrorStyle>
    )
}

export default Error