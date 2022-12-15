import api from 'utils/axiosClient';
import config from 'config/config';
import storageService from 'utils/storage';

function login({ username, password }) {
  return new Promise((resolve, reject) => {
    async () => {
      if (username && password) {
        try {
          const body = { username, password };
          const res = await api.post('/user/login', body);
          if (res) {
            storageService.setAccessToken(
              JSON.stringify(res.data),
            );
          }
          return resolve(res.data);
        } catch (err) {
          return reject(err);
        }
      }

      return reject(
        new Error(
          'Invalid username and password. Please fill right username and password!',
        ),
      );
    };
  });
}

const authService = {
  login,
};

export default authService;
