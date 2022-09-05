import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './routers';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <Footer>
        <h2> by Hector Minguez </h2>
      </Footer>
    </>
  );
};

export default App;
