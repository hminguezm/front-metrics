import { Route, Routes } from 'react-router-dom';
import Home from '../components/common/Home';
import Layout from '../components/common/Layout';
import MetricRouter from './Metrics';

const Pages = () => {
  return (
    <Layout withHeader>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="metrics/*" element={<MetricRouter />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
