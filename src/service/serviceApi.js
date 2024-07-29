import axios from 'axios';
import { toast } from 'react-toastify';
const axiosPost = axios.create({
  baseURL: process.env.REACT_APP_URL_API
});
axiosPost.interceptors.response.use(
  (response) => {
    if (response.data.api_error) {
      return Promise.reject((response && response.data) || 'Something went wrong');
    }
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status) {
        return Promise.reject(error.response);
      } else {
        return Promise.reject((error.response && error.response.data) || error.toJSON());
      }
    } else if (error.request) {
      return Promise.reject(error.request);
    } else {
      return Promise.reject(error.toJSON());
    }
  }
);

export function ApiGet(urlApi, parametro = {}) {
  // console.log(urlApi)
  // const dataFrom = transformFromData(parametro);
  const responseData = AxiosGet(urlApi, parametro);

  // Equivalent to `axios.get('https://httpbin.org/get?answer=42')`
// const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

  return responseData;
}

/**
 * config api post
 * @param {String} urlApi url for request
 * @param {Object.toJSON} parametro parameter
 * @returns {Promise} responseData response data
 */
export function ApiPost(urlApi, parametro = {}) {
  // const dataFrom = transformFromData(parametro);
  const responseData = Axiospost(urlApi, parametro);
  return responseData;
}

const AxiosGet = async (urlApi, dataFrom) => {
  try {
    // const responseData = await axiosPost.post(urlApi, dataFrom);
    // const responseData = await axios.get(urlApi, { params: dataFrom });
    const responseData = await axiosPost.get(urlApi);

    if (responseData.statusText === 'OK') {
      return responseData.data;
    } else {
    }
  } catch (error) {
    if (error.api_error) {
      toast.warning(error.api_error_detail);
    }
    if (error.status) {
      toast.warning(`Code: ${error.status} ${error.statusText}`);
    }
    if (error.Error) {
      if (error.Error !== 0) {
        toast.warning(error.message);
      }
    }
    return error;
  }
};

const Axiospost = async (urlApi, dataFrom) => {
  try {
    const responseData = await axiosPost.post(urlApi, dataFrom);
    if (responseData.statusText === 'OK') {
      return responseData.data;
    } else {
    }
  } catch (error) {
    if (error.api_error) {
      toast.warning(error.api_error_detail);
    }
    if (error.status) {
      toast.warning(`Code: ${error.status} ${error.statusText}`);
    }
    if (error.Error) {
      if (error.Error !== 0) {
        toast.warning(error.message);
      }
    }
    return error;
  }
};

function createFromData(formData, data) {
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
}
const transformFromData = (parameter) => {
  const formData = new FormData();
  // const dataOauth = JSON.parse(localStorage.getItem('accessToken'));
  // const func = localStorage.getItem('func');
  // if (func) {
  //   formData.append('func', func);
  // }
  // const dataOauthParameter = {
  //   ...dataOauth,
  //   ...parameter
  // };
  const dataOauthParameter = {
    ...parameter
  };
  const fromData = createFromData(formData, dataOauthParameter);
  return fromData;
};
