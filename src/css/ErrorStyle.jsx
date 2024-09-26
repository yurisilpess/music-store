import styled from "styled-components"

export const ErrorStyle = styled.section `
    width: 100%;
    height: 100vh;
    background-color: #15473b;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        display: flex;
        align-items: center;
    }

    .error {
        margin: 0 20px;
        padding: 50px;
        border-radius: 30px;
        background-color: white;
        color: #15473b;
    }

    h1 {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 60px;
        margin-bottom: 2vh;
        font-family: 'GeneralBigFont';
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
        text-align: center;
        font-size: 30px;
        font-family: 'NormalBoldFont';
    }

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30vh;
    }
`