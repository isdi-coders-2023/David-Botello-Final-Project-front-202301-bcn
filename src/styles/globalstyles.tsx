import { createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Racing Sans One", "Faster One", "sans-serif"],
  },
});

const GlobalStyled = createGlobalStyle`

:root {
--accent-color: #EEAA00;
--primary-color:#2361B1;
--warning-color: #F3949A;
--accent-dark:#3E3B5C;
--gray-dark: #4E4B5C;
--white: #fff;
--gray-light: #eee;
--tertiary-font: "Oswald";
--secondary-font: "Montserrat";
--primary-font: "Faster One";
--heading-font: "Racing Sans One"

}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  color: #4E4B5C;
  font-family: var(--secondary-font);
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
}

input::placeholder {
  color:inherit;
}
  
button {
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  border:none;
  background-color:transparent;
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
