import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import { myTheme } from './components/styles/my-theme';
import content from './content';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => (
            <Card key={item.id} {...item} />
          ))}
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
