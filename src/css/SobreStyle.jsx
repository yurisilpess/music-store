import styled from "styled-components"

export const SobreStyle = styled.section `
    width: 100%;
    background-color:#081711;

.titulo{
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(16px,2vw,40px);
}


.Sobre{ 
    margin-top: clamp(120px,18vh,260px);
    text-align: center;
    padding: 2vw 18vw ;
    margin-bottom: clamp(20px,4vh,100px);
    font-size: clamp(14px,3.2vw,40px);
}

.texto-sobre{
    padding-top: 4vh;
}

h1{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    font-size: clamp(36px,4vw,60px);
    font-family: 'GeneralBigFont';
    font-size: 48px;
    color: #c9f2d8;
}
h2{
    font-size: clamp(10px,1.8vw,40px);
    font-weight: 500;
    font-family: 'HomepageFont';
    color: #c9f2d8;
}
p{
    font-size: 2vh;
    line-height: 3vw;
    font-size: clamp(6px,1.8vw,40px);
    font-family: 'SubFont';
    color: #c9f2d8;
    border: 1.5px solid #c9f2d8;
    border-radius: 2vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-left: 2vh;
    margin-right: 2vh;
    padding-bottom: 4vh;
    padding-left: 4vh;
    padding-right: 3.8vh;

}

i{
    padding-right: 1.2vw;
}
`