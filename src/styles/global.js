import { injectGlobal } from "styled-components";
import "typeface-roboto";

injectGlobal`
  html,
  body,
  #root {
    font-family: Roboto, Arial, Verdana, Tahoma, sans-serif;
    height: 100%;
    margin: 0;
    width: 100%;
  }
`;
