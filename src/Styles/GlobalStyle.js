import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
:root {
    --font-bold: 700;
    --link-color: #9933cc;
    --bg-light-gray: #e4e4e4;
    --bg-mid-gray: #d0d0d0;
    --radius-value: 25px;
} 
* {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: #333;
  background-color: #fff;
  -ms-overflow-style: none;
}
button {
  outline: none;
}
a {
  color: rgb(0,0,0);
  text-decoration: none;
}
.sub-copy {
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.3;
}
p {
  line-height: 1.45;
}
`;

export default GlobalStyle;