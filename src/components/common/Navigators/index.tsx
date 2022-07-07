import { Link, Outlet } from 'react-router-dom';

const Navigator = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/metrics"> Metrics </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigator;
