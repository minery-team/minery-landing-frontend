import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "styles/media";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    height: 100%;
    }
    body{
        padding-top:75px ;
    }
    * {
    box-sizing: border-box;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    button {
        background: inherit;
        border: none;
        box-shadow:none;
    }
    
    ol,ul,li {
        list-style: none;
    }

`;

export default GlobalStyles;
