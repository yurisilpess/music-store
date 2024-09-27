import styled from "styled-components";

export const MusicasStyle = styled.section`
  width: 100%;
  background: #dcffe9;

  h1 {
    display: flex;
    justify-content: center;
    margin-top: calc(6vw + 60px);
    font-size: clamp(20px, 2.2vw, 35px);
    font-family: 'GeneralBigFont';
    color: #0a241e;
  }

  h1 i {
    padding-right: 1vw;
  }

  section {
    display: flex;
    justify-content: center;
    margin: 1vw;
  }

  .musicas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Permite que os itens "quebrem" de linha em telas menores */
    margin-bottom: 10vh;
  }

  .musica {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(210deg, #5d0b29, #144c69);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    flex-basis: 10%; /* Define uma base flexível para os produtos */
    transition: 0.4s ease-in-out;
  }

  .musica:hover {
    transform: scale(1.05);
  }

  .musica2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(200deg, #fc2000, #5c698d);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    flex-basis: 10%; /* Define uma base flexível para os produtos */
    transition: 0.3s ease-in-out;
  }

  .musica2:hover {
    transform: scale(1.05);
  }

  .musica3 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(195deg, #1e4294, #e58d51);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    flex-basis: 10%; /* Define uma base flexível para os produtos */
    transition: 0.3s ease-in-out;
  }

  .musica3:hover {
    transform: scale(1.05);
  }

  .musica4 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(45deg, #141f1d, #608787);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    flex-basis: 10%;
  }

  .musica4:hover {
    transform: scale(1.05);
  }

  .musica5 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(180deg, #f5e636, #58cad4);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    flex-basis: 10%;
  }

  .musica5:hover {
    transform: scale(1.05);
  }

  .musica6 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(165deg, #286880, #e4621b);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    flex-basis: 10%;
  }

  .musica6:hover {
    transform: scale(1.05);
  }

  .musica7 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(120deg, #18395e, #a56d5b);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    flex-basis: 10%;
  }

  .musica7:hover {
    transform: scale(1.05);
  }

  .musica8 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 1vw;
    background: linear-gradient(180deg, #56642f, #367dc1);
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
    flex-basis: 10%;
  }

  .musica8:hover {
    transform: scale(1.05);
  }

  .imagem {
    display: flex;
    justify-content: center;
    width: clamp(200px,14vw,300px);
    height: clamp(200px,14vw,300px);
    margin: 2.6vw 2.6vw 1.6vw 2.6vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.5);
    border: 4px solid white;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
  }

  .imagem:hover {
    transform: scale(1.1);
  }

  p {
    margin: 1.6vw 1vw 2.2vw 1vw;
    color: white;
    overflow: visible;
    text-align: center;
    font-size: 22px;
    font-family: 'HomepageFont';
    word-wrap: break-word;
  }

  h2 {
    text-align: center;
    font-size: 1.5vw;
    transition: 0.3s ease-in-out;
    font-family: 'SubFont';
  }

  .preco {
    font-size: 18px;
    font-weight: 400;
    font-family: 'SemiBoldFont';
    word-wrap: break-word;
  }

  .btn {
    display: flex;
    justify-content: center;
    padding: 1.6vw;
    text-decoration: none;
    background-color: black;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    transition: 0.2s ease-in-out;
    color: white;
    font-family: 'SubFont';
  }

  .btn:hover {
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }

  a {
    text-decoration: none;
  }

  /* Responsividade */
  @media (max-width: 1400px) {
    .musicas {
      flex-direction: column; /* Alinha os produtos verticalmente */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica2 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica3 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica4 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica5 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica6 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica7 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .musica8 {
      flex-basis: 60%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .imagem {
      width: 24vw;
      height: 24vw;
    }
    .musica .imagem {
    }
  }
`;


