import { createGlobalStyle } from "styled-components";

export const queries = size => () => props => props.theme.mediaQueries[size];

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size:62.5%;

        @media only screen and (max-width: ${queries("large")}) {         
            font-size: 55%;
        }
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }


`;

export default GlobalStyle;
