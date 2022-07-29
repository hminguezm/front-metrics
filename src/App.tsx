import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container } from './styles';
import Pages from './routers';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Input from './components/common/Input';
import ImageICon from '../src/assets/images/icons/alert-circle.svg'

const App: FC = () => {
  return (
    <>
      <Header>
        <h2>Hello World</h2>
        <ul>
          <li>About</li>
        </ul>
        <Input
          handleOnChange={(e) => console.log(e)}
          label="label"
          type="password"
          maxLength={22}
        />
        <Input
          handleOnChange={(e) => console.log(e)}
          maxLength={22}
          label="test2"
          type="text"
          ImgUrl={ImageICon}
        />
      </Header>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <h2> BODY ggggflgdlfgjsdljfglsdkfjgldskjfglkdjsflkgjdslkfjgldsfjgklds</h2>
      <h2> BODY </h2>
      <h2> BODY </h2>
      <h2> BODY </h2>
      <Footer>
        <h2> by Hector Minguez </h2>
      </Footer>
    </>
  );
};

export default App;
