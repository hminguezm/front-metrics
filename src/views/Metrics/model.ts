import { getFromApi, postToApi } from '../../config/servces/axios';
import Settings from '../../config/servces/axios/build-url';

export const createMetric = (body: any) =>
  postToApi(
    body,
    Settings.buildUrl(Settings.urls.apiMetrics, Settings.path.metrics),
    '',
    '',
  );

export const getMetric = () =>
  getFromApi(
    Settings.buildUrl(Settings.urls.apiMetrics, Settings.path.metrics),
    '',
    '',
  );
