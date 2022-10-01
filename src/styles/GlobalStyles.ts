import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "styles/media";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    width:100vw;
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
    cursor: pointer;
    }
    button {
        background: inherit;
        border: none;
        box-shadow:none;
        cursor: pointer;
    }
    
    ol,ul,li {
        list-style: none;
    }

`;

export default GlobalStyles;
