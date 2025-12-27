import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        /* Ensure the background color from index.css is applied globally if not overridden */
        background-color: var(--light-bg);
    }
`;
