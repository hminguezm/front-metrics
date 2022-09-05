import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/metrics');
  }
  return <h1> HOME </h1>;
};

export default Home;
