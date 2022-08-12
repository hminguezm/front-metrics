import buildUrl from 'build-url-ts';

export default {
  listReloadTime: 10000, // 10 secs
  xsReloadTime: 60000, // 1 min
  mdReloadTime: 3600000, // 1 hour
  lgReloadTime: 86400000, // 1 day
  urls: {
    apiMetrics: process.env.REACT_APP_API_METRICS_URL,
  },
  path: {
    metrics: `metrics`,
    metrics: `metrics`,
    metrics: `metrics`,
    metrics: (id) => `${id}`,
  },
  buildUrl: (
    url = '',
    path = '',
    hash = '',
    lowerCase = false,
    disableCSV = false,
    queryParams?: any,
  ) =>
    buildUrl(url, {
      path,
      hash,
      lowerCase,
      disableCSV,
      queryParams,
    }),
};
