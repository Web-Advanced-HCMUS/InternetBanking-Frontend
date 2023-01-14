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
  FEE_PAYMENT_METHOD: {
    0: ['Người gửi chịu phí chuyển khoản', 'paid sender'],
    1: ['Người nhận chịu phí chuyển khoản', 'paid receiver'],
  },
  DEBT_STATUS: {
    INCOMPLETE: 'incomplete',
    COMPLETE: 'complete',
    CANCEL: 'cancel',
  },

  DEBT_TYPE: {
    CREDITOR: 'creditor',
    DEBTOR: 'debtor',
  },

  TRANSFER_TYPE: {
    INTERNAL: 'internal',
    INTERBANK: 'interbank',
  },

  TRANSACTION_TYPE: {
    DEPOSIT: 'deposit',
    INTERNAL_TRANSFER: 'internal-transfer',
    INTERBANK_TRANSFER: 'interbank-transfer',
    PAY_DEBT: 'pay-debt',
    RECHARGE: 'RECHARGE',
  },

  TRANSACTION_STATUS: {
    FAIL: 'fail',
    PENDING: 'pending',
    SUCCESS: 'success',
  },

  ACCOUNT_TYPE: {
    PAYMENT: 'payment',
    SAVING: 'saving',
  },

  OTP_STATUS: {
    PENDING: 'pending',
    CONFIRM: 'confirmed',
  },

  BANK_CODE: {
    MY_BANK: 'TIMO_CLONE',
    EXT_BANK: 'SWEN',
  },

  siteKey: process.env.REACT_APP_SITE_KEY,
};

export default config;
