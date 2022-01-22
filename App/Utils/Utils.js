import Toast from 'react-native-toast-message';
import axios from 'axios';
import { Constants } from 'configs';

export const setAxiosDefaultAuthToken = (token) => {
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const setAxiosDefaultLanguage = (language) => {
  axios.defaults.headers.common['Accept-Language'] =
    language || Constants.LANGUAGE.DEFAULT;
};

export const deleteDefaultAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const ToastBottomHelper = {
  success: (msg, timeout = 3000) => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: msg,
      visibilityTime: timeout,
    });
  },
  error: (msg, timeout = 3000) => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: msg,
      visibilityTime: timeout,
    });
  },
};

export const keyExtractor = (item) => item.id;
