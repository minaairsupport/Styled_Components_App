import ThemeType, { createGlobalStyle } from 'styled-components';
import { myTheme } from './my-theme';

export type MyProps = {
  theme: typeof myTheme;
};

const GlobalStyles = createGlobalStyle<MyProps>`

@import url('http://fonts.googleapis.com/css2?family=Poppins:wgh#300;400;600;700;@display=swap');

* {
    box-sizing: border-box;
}

body{
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img{
    max-width: 100%
}
`;

export default GlobalStyles;
