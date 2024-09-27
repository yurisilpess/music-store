import styled from "styled-components"

export const RickRollStyle = styled.section `
    
    width: 100%;
    height: clamp(400px, 100vh, 1500px);
    background-color: white;

    h1{
        display:flex;
        justify-content: center;
        margin-top: clamp(80px, 20vh, 300px);
        font-size: clamp(20px,3vw,50px);
        font-family: 'SemiBoldFont';
        color: #0a241e;
    }
    h1 i{
        padding-right: 1vh;
    }

    .musicas {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; /* Permite que os itens "quebrem" de linha em telas menores */
        margin-bottom: 10vh;
        margin-top: 35vh;
        scale: 3;
    }

    .imagem {
        display: flex;
        flex-direction: column;
        margin: 1vw;
        box-shadow: 0vw 0vw 1vw rgba(157, 162, 190, 0.3);
        border-radius: 10px;
        flex-basis: 10%; /* Define uma base flexível para os produtos */
    }

`