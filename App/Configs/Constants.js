import { Platform, Dimensions, StatusBar } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const FONT_PREFIX = 'SFProDisplay';

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');
export const LANGUAGE = {
  English: { label: 'English (EN)', value: 'en' },
  Vietnamese: { label: 'Tiếng Việt (VN)', value: 'vi' },
  DEFAULT: 'en',
};

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
      (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT))
  );
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: isIphoneX() ? 40 : 20,
    android: StatusBar.currentHeight,
  });
}

export const Constants = {
  paddingTop: getStatusBarHeight(),
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  LANGUAGE,
  FONT_PREFIX,
  isIphoneX,
};

export const USER_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
};
