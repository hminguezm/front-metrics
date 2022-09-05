import { Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MetricRouter from './Metrics';

const Pages = () => {
  return (
    <Layout withHeader={false}>
      <Routes>
        <Route index element={<MetricRouter />} />
        {/*<Route path="home" element={<Home />} />*/}
        <Route path="metrics/*" element={<MetricRouter />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
