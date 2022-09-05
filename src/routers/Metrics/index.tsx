import { Route, Routes } from 'react-router-dom';

import Metrics from '../../views/Metrics/Metrics';

const MetricRouter = () => {
  return (
    <Routes>
      <Route index element={<Metrics />} />
      <Route path="create" element={<Metrics />} />
      {/*<Route path="views" element={<ViewMetric />} />*/}
    </Routes>
  );
};

export default MetricRouter;
