import axios from 'axios';
import config from 'config/config';
import swal from 'sweetalert2';
import storageService from './storage';

const api = axios.create({
  baseURL: config.path.REACT_APP_SERVER_PATH,
});

api.interceptors.request.use(async (currentConfig) => {
  const accessToken = storageService.getAccessToken();
  if (accessToken) {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  }

  return {
    ...currentConfig,
    headers: {
      ...currentConfig.headers, // The token data
    },
  };
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (
      originalConfig.url !== '/user/login' &&
      error.response
    ) {
      if (error.response.status === 401) {
        await swal.fire({
          title: 'Thông báo',
          text: 'Phiên đăng nhập của bạn đã hết, vui lòng đăng nhập lại',
          icon: 'info',
          confirmButtonText: 'OK',
        });
        localStorage.removeItem(
          config.storageKeys.ACCESS_KEY,
        );
        window.location.assign(`/login`);
      }
    }
  },
);

export default api;
