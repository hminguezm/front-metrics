import { BrowserRouter } from 'react-router-dom';
import Pages from './routers';
import Header from './components/common/Header';

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
