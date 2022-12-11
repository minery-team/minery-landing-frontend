import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "@/styles/media";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    width:100vw;
    height: 100%;
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
    .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }

  ul.pagination li:first-child{
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child{
    border-radius: 0 5px 5px 0;
  }
  
  ul.pagination li a {
    text-decoration: none;
    color: #4e5968;
    font-size: 1rem;
  }
  
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #A10000;
    border-radius: .3rem;
  }
  
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #111;
  }
  
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

export default GlobalStyles;
