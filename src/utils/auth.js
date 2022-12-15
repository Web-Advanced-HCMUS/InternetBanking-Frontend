import storageService from './storage';

function isAuthenticated() {
  return !!storageService.getAccessToken();
}

export const auth = {
  isAuthenticated,
};
