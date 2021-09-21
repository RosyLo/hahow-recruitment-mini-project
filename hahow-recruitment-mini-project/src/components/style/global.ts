import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  backgroundColor: 'black',
};

export const GlobalStyle = createGlobalStyle`
  body {
    line-height: 1.5;
    background-color: #E9EDED;
    overflow-x: hidden;
    font-family: 'Helvetica Neue', 'Microsoft JhengHei', sans-serif; }

  ol, ul {
    list-style: none; }

  blockquote, q {
      quotes: none; }

  blockquote:before, blockquote:after {
      content: '';
      content: none; }

  q:before, q:after {
      content: '';
      content: none; }

  table {
      border-collapse: collapse;
      border-spacing: 0; }

  *, *:before, *:after {
      box-sizing: border-box; }

  img {
      max-width: 100%;
      height: auto;
      display: block; }

  a {
      text-decoration: none;
      color: #000;
      outline: none; }

  button {
      background-color: transparent;
      outline: none;
      border: 0;
      font-size: 16px;
      padding: 0; }
`;
