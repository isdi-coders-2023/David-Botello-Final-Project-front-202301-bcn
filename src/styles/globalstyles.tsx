import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  color: #4E4B5C;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
 display: flex;
 justify-content:center;
 padding: 2rem;

}

input{
  border: none;
  outline: none;
  color:inherit;
  font-family: inherit;
}

input::placeholder {
  color:inherit;
}
  
  button {
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    border:none;
    background-color:none;
    cursor: pointer;
  }

  ol, ul {
    list-style:none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyled;
