import axios from 'axios';

export const getFromApi = async (url = '', token = '', type = '') => {
  if (url == null || url === '') {
    throw new Error("url and onSuccess can't be null or empty");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .get(url, { headers })
    .then((response: { config?: any; status?: any; data?: any }) => {
      const { status, data } = response;
      if (status === 200) {
        return { data, status };
      } else {
        return { response, status };
      }
    })
    .catch((error: any) => {
      return { data: error.response, status: 500 };
    });
};

export const postToApi = async (body = {}, url = '', token = '', type = '') => {
  if (url == null || url === '') {
    throw new Error("url and onSuccess can't be null or empty");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .post(url, body, { headers })
    .then((response: { statusText?: any; status?: any; data?: any }) => {
      const { status, data } = response;
      if (response.statusText) {
        return { data, status };
      } else {
        return { data, status };
      }
    })
    .catch((error: { response: any }) => {
      return { data: error.response, status: 500 };
    });
};
