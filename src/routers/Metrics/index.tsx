import { Route, Routes } from 'react-router-dom';
import CreateMetric from '../../components/Metrics/CreateMetric';
import ViewMetric from '../../components/Metrics/ViewMetric';

const MetricRouter = () => {
  return (
    <Routes>
      <Route index element={<CreateMetric />} />
      <Route path="create" element={<CreateMetric />} />
      <Route path="views" element={<ViewMetric />} />
    </Routes>
  );
};

export default MetricRouter;
