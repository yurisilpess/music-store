import {ContatoStyle} from '../css/ContatoStyle'

function enviar(){
    let Nome = document.getElementById("idNome").value;
    let Email = document.getElementById("idEmail").value;
    let Telefone = document.getElementById("idTelefone").value;
    if(Nome != "" && Telefone != "" && Email != ""){
        alert("Contato enviado!");

    }
    else{
        alert("Campos não preenchidos corretamente")
    }
}

const Contato =()=>{
    return(
        <ContatoStyle>
                <h1 className='Contato_titulo'>
                <i class="fi fi-br-address-book"></i>
                    Contato
                </h1>
            <section>
                <div className='Contato_titulo'></div>
                    <div className='Contato_box'>
                        <form className='Formulario'>

                        <label>
                            <p>
                                <i class="fi fi-rr-user"></i>
                                Nome
                            </p>
                            <input type="text" placeholder="Digite seu nome" id="idNome"  />
                        </label>

                        <label>
                            <p>
                                <i class="fi fi-rr-envelope"></i>
                                E-mail
                            </p>
                            <input type="text" placeholder="Digite seu e-mail" id="idEmail"  />
                        </label>

                        <label>
                            <p>
                                <i class="fi fi-rr-phone-call"></i>
                                Telefone
                            </p>
                            <input type="text" placeholder="Digite seu telefone" id="idTelefone"  />
                        </label>

                        </form>
                        <button onClick={enviar} className='Button' value="enviar">Enviar</button>
                    </div>
            </section>
        </ContatoStyle>
    )
}
export default Contato