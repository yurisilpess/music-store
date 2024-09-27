import { LoginStyle } from '../css/LoginStyle'

function handleLogin(){
    let email = document.getElementById("idEmail").value;
    let password = document.getElementById("idPassword").value;
    if(email !== "" && password !== ""){
        alert("Login successful!");
    }
    else{
        alert("Please fill in all fields correctly");
    }
}

const Login = () => {
    return (
        <LoginStyle>
            <h1 className='Login_titulo'>
                <i className="fi fi-br-address-book"></i>
                Login
            </h1>
            <section>
                <div className='Login_titulo'></div>
                <div className='Login_box'>
                    <form className='Formulario'>
                        <label>
                            <p>
                                <i className="fi fi-rr-envelope"></i>
                                E-mail
                            </p>
                            <input type="text" placeholder="Digite seu e-mail" id="idEmail" />
                        </label>

                        <label>
                            <p>
                                <i className="fi fi-rr-lock"></i>
                                Password
                            </p>
                            <input type="password" placeholder="Digite sua senha" id="idPassword" />
                        </label>
                    </form>
                    <button onClick={handleLogin} className='Button' value="login">Login</button>
                </div>
            </section>
        </LoginStyle>
    )
}

export default Login
