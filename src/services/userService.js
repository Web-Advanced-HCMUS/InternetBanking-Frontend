import jwtDecode from 'jwt-decode';
import api from 'utils/axiosClient';
import storageService from 'utils/storage';

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { token } = JSON.parse(
        storageService.getAccessToken(),
      );
      if (token) {
        const res = api.get('/user/get-user-info-by-token');
        return resolve(res);
      }

      return reject(
        new Error(
          'Unauthorized User API call: missing auth token.',
        ),
      );
    }, 0);
  });
}
