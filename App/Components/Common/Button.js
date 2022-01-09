import React from 'react';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Colors } from 'configs';
import Text from 'components/Text';
import styles from './styles/buttonStyles';

const ButtonStyle = {
  auth: {
    backgroundColor: Colors.Primary,
    borderRadius: 5,
    borderWidth: 0,
  },
  primary: {
    backgroundColor: Colors.Primary,
    borderRadius: 28,
    borderWidth: 0,
  },
  info: {
    backgroundColor: Colors.White,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Gray4,
  },
  infoDark: {
    backgroundColor: Colors.Gray9,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Gray8,
  },
  cancel: {
    backgroundColor: Colors.White,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Gray4,
  },
  disabled: {
    backgroundColor: Colors.Gray4,
    borderRadius: 28,
    borderWidth: 0,
  },
  disabledBorder: {
    backgroundColor: Colors.Gray4,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Gray3,
  },
  primaryBorder: {
    backgroundColor: Colors.White,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Primary,
  },
  alert: {
    backgroundColor: Colors.Red5,
    borderRadius: 28,
    borderWidth: 0,
  },
  alertBorder: {
    backgroundColor: Colors.White,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Red6,
  },
  underline: {
    backgroundColor: Colors.White,
    borderWidth: 0,
  },
  setupBorder: {
    backgroundColor: Colors.Cyan1,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Primary,
  },
  pink: {
    backgroundColor: Colors.Red5,
    borderRadius: 28,
    borderWidth: 0,
  },
  reverse: {
    backgroundColor: Colors.White,
    borderRadius: 28,
    borderWidth: 0,
  },
  reverseDark: {
    backgroundColor: Colors.Gray9,
    borderRadius: 28,
    borderWidth: 0,
  },
  lightPrimary: {
    backgroundColor: Colors.Blue2,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Blue3,
  },
};

const TextColor = {
  auth: Colors.White,
  primary: Colors.White,
  info: Colors.Primary,
  infoDark: Colors.White,
  cancel: Colors.Gray8,
  disabled: Colors.Gray6,
  disabledBorder: Colors.Gray6,
  primaryBorder: Colors.Primary,
  alert: Colors.White,
  alertBorder: Colors.Red6,
  underline: Colors.Gray6,
  setupBorder: Colors.Primary,
  pink: Colors.White,
  reverse: Colors.Primary,
  reverseDark: Colors.White,
  lightPrimary: Colors.Blue10,
};

const TextSize = {
  H1: 30,
  H2: 24,
  H3: 20,
  H4: 16,
  Body: 14,
  Label: 12,
};

// Note: pass props style with flex: 0 if background does not display

// Type
// auth, primary, info, cancel, disabled, disabledBorder, primaryBorder, alert, alertBorder, underline, setupBorder

export default ({
  title,
  onPress,
  width,
  height = 48,
  activeOpacity,
  type,
  icon,
  isLoading = false,
  textType = 'H4',
  textSemiBold = true,
  style,
  wrapStyle,
  testID,
  disabled,
}) => {
  const styleButton = ButtonStyle[type];
  const textColor = TextColor[type];

  const isDisabled = type === 'disabled' || type === 'disabledBorder';
  const isUnderline = type === 'underline';
  const textSize = TextSize[textType];
  return (
    <View style={wrapStyle}>
      <TouchableOpacity
        testID={testID}
        style={[
          styles.button,
          styleButton,
          style,
          {
            width,
            height,
          },
        ]}
        onPress={onPress}
        disabled={isDisabled || disabled}
        activeOpacity={activeOpacity}
      >
        <View style={styles.wrap}>
          {isLoading && <ActivityIndicator size="small" color={Colors.White} />}
          {icon}
          <Text
            type={textType}
            semibold={textSemiBold}
            color={textColor}
            size={textSize}
            underline={isUnderline}
            style={[(!!icon || isLoading) && styles.marginIcon]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
