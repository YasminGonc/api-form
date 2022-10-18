import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        height: 100vh;
        background-image: ${props => props.theme.linear};
        background-repeat: no-repeat;

        color: ${props => props.theme.text};
    }

    body, input, textarea, button {
        font: 400 1rem 'Questrial', sans-serif;
    }
`