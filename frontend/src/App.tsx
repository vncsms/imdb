import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import MainContainer from './styles/main';
import Topbar from './components/Topbar';
import Routes from './routes';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Topbar/>
        <MainContainer>
          <Routes />
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
