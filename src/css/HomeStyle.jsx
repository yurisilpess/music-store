import styled from "styled-components"

export const HomeStyle = styled.section `
    
    width: 100%;
    height: clamp(400px, 100vh, 1500px);
    background-color:#dcffe9;

    h1{
        display:flex;
        justify-content: center;
        margin-top: clamp(80px, 28vh, 300px);
        font-size: clamp(16px,2vw,40px);
        font-family: 'GeneralBigFont';
        color: #0a241e;
    }
    h1 i{
        padding-right: 1vh;
    }
    .bem-vindo{
        display: flex;
        justify-content: center;
        font-size: clamp(20px,3vw,54px);
        margin-top: clamp(40px,14vh, 16vh);
        font-weight: 700;
        overflow: auto;
        padding: 0vw;
        font-family: 'HomepageFont';
    }
    .texto{
        display: flex;
        justify-content: center;
        color: #15473b; 
        padding: 2vw 4vw;
        font-weight: 400;
        font-size: clamp(12px,1.8vw,40px);
        font-family: 'GenMediumFont';
    }
`