import styled from "styled-components"

export const NavStyle = styled.section `

//cover esta sendo usado para fazer um efeito ilusorio do sumiço do scroll
.cover{
    display: flex;
    position: fixed;
    width: 200vw;
    height: calc(1vw + 10px);
    background-color: #15473b;
    z-index: 1;
}

.nav{
    width: 92vw;
    height: calc(5vw + 30px);
    z-index: 2;
    display: flex;
    text-align: center;
    position: fixed;
    margin-top: 2vh;
    margin-left: 2.6vw; 
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    list-style: none;
    border-radius: 1vh;
    box-shadow: 1vh 1vh 2vh rgba(0, 34, 8, 0.3); 
}

.navlink{
    display: flex;
    justify-content: center;
    margin-left: 0vw;
    padding-top: calc(1vh + 10px);
    padding-bottom: calc(1vh + 10px);
    margin: clamp(10px,5vw,16vw);
    text-decoration:none;
    font-size: clamp(8px , 1.4vw, 26px);
    color: #05100e;
    transition: 0.3s ease-in-out;
    border: 2px solid #15473b;
    border-radius: 0%;
    padding-left: 1vw;
    padding-right: 1vw;
    font-family: 'NormalBoldFont';
}

.navlink:hover{
    background-color: #b0ffcd;
    border-color: #05100e;
    border-radius: 2vh;
    color: #15473b;
}

.Marca{
    margin-left: 4vw;
    font-size: clamp(0px,2.6vw, 3vw);
    color: #15473b;
    font-family: 'GeneralBigFont';
    font-weight: bold;
}

`