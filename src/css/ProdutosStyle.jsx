import styled from "styled-components";

export const ProdutosStyle = styled.section`
  width: 100%;
  background-color:#dcffe9;

  h1 {
    display: flex;
    justify-content: center;
    margin-top: calc(10vw + 60px);
    font-size: clamp(20px, 2.2vw, 35px);
    font-family: 'GeneralBigFont';
    color: #0a241e ;
  }

  h1 i {
    padding-right: 1vw;
  }

  section {
    display: flex;
    justify-content: center;
    margin: 2vw;
  }

  .produtos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Permite que os itens "quebrem" de linha em telas menores */
    margin-bottom: 10vh;
  }

  .produto {
    display: flex;
    flex-direction: column;
    margin: 2vw;
    background-color: #232a2f;
    border-radius: 1vw;
    box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
    flex-basis: 10%; /* Define uma base flexível para os produtos */
  }

  .imagem {
    display: flex;
    justify-content: center;
    width: clamp(200px,14vw,300px);
    height: clamp(200px,14vw,300px);
    margin: 2.6vw 2.6vw 1.6vw 2.6vw;
  }

  p {
    margin: 1.6vw 1vw 2.2vw 1vw;
    color: white;
    overflow: visible;
    text-align: center;
    font-size: 15px;
    font-family: 'SubFont';
  }

  h2 {
    text-align: center;
    font-size: 1.5vw;
    transition: 0.3s ease-in-out;
    font-family: 'SubFont';
  }

  .preco {
    font-size: 1vw;
    font-weight: 400;
    font-family: 'SubFont';
  }

  .btn {
    display: flex;
    justify-content: center;
    padding: 1.6vw;
    text-decoration: none;
    background-color: #285879;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    transition: 0.4s ease-in-out;
    color: black;
    font-family: 'SubFont';
  }

  .btn:hover {
    background-color: #f9f8f7;
  }

  .btn:hover h2 {
    scale: 1.03;
    font-weight: 900;
  }

  a {
    text-decoration: none;
  }

  /* Responsividade */
  @media (max-width: 1400px) {
    .produtos {
      flex-direction: column; /* Alinha os produtos verticalmente */
      align-items: center;
      justify-content: center;
    }

    .produto {
      flex-basis: 50%; /* Produtos ocupam a largura total */
      margin-bottom: 2vh; /* Espaço entre os produtos */
    }

    .imagem {
      width: 24vw;
      height: 24vw;
    }
    .produto .imagem {
    }
  }
`;


