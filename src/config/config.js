const config = {
  storageKeys: {
    ACCESS_KEY: 'access_key',
    REFRESH_KEY: 'refresh_key',
  },

  path: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    REACT_APP_SERVER_PATH: process.env.REACT_APP_SERVER_PATH,
    client: '/home',
  },
  USER_ROLE: {
    CLIENT: 'CLIENT',
    EMPLOYEE: 'EMPLOYEE',
    ADMIN: 'ADMIN',
  },
};

export default config;
