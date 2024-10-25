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
    flex-wrap: wrap; /* Allows items to break to the next line on smaller screens */
    margin-bottom: 10vh;

    /* Apply common styles for all music items */
    > nav {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 1vw;
      border-radius: 1vw;
      box-shadow: 0.5vw 0.5vw 1.2vw rgba(0, 0, 0, 0.3);
      flex-basis: 10%; /* Flexible base for products */
      transition: 0.4s ease-in-out;
      background: linear-gradient(210deg, #5d0b29, #144c69); /* Default background color */
    }

    /* Individual item styles */
    nav:nth-child(1) {
      background: linear-gradient(210deg, #5d0b29, #144c69);
    }
    nav:nth-child(2) {
      background: linear-gradient(200deg, #fc2000, #5c698d);
    }
    nav:nth-child(3) {
      background: linear-gradient(195deg, #1e4294, #e58d51);
    }
    nav:nth-child(4) {
      background: linear-gradient(45deg, #141f1d, #608787);
    }
    nav:nth-child(5) {
      background: linear-gradient(180deg, #f5e636, #58cad4);
    }
    nav:nth-child(6) {
      background: linear-gradient(165deg, #286880, #e4621b);
    }
    nav:nth-child(7) {
      background: linear-gradient(120deg, #18395e, #a56d5b);
    }
    nav:nth-child(8) {
      background: linear-gradient(180deg, #56642f, #367dc1);
    }

    nav:hover {
      transform: scale(1.05);
    }
  }

  /* Image styles */
  .imagem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(200px, 14vw, 300px);
    height: clamp(200px, 14vw, 300px);
    margin: 2.6vw;
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

  /* Responsiveness */
  @media (max-width: 1400px) {
    .musicas {
      flex-direction: column; /* Align products vertically */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    nav {
      flex-basis: 100%; /* Products take full width */
      margin-bottom: 2vh; /* Space between products */
      display: flex;
      justify-content: center;
      align-items: center;
      word-wrap: break-word;
    }

    .imagem {
      width: 25vw;
      height: 25vw;
      align-items: center;
      justify-content: center;
    }
  }
`;
