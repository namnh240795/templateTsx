import { extend } from 'umi-request';
import { ERROR_CODES } from './error_codes';

export const BE = extend({
  prefix: 'https://reqres.in',
  errorHandler: function (error) {
    const { response, data } = error;
    if (response.status >= 400 && response.status < 500) {
      throw ERROR_CODES[data.errorCode];
    } else {
      return Promise.reject(error);
    }
  },
});
