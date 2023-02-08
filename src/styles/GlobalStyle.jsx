import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Lato', sans-serif;
  color: inherit;
}
body{
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: ${({ theme }) => theme.bg}
}
`;
