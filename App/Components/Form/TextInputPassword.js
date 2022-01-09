import React, { useState } from 'react';
import { View, TouchableOpacity, Image, TextInput } from 'react-native';
import Text from 'components/Text';
import { Images } from 'configs';
import styles from './styles/textInputPasswordStyles';

const _TextInputPassword = ({
  label,
  placeholder,
  onChange,
  wrapStyle,
  maxLength,
  secureTextEntry,
  textInputStyle,
  labelStyle,
  errorText,
  onBlur,
  defaultValue,
  onSubmitEditing,
  onFocus,
  editable,
  keyboardType,
  value,
  extraText,
  autoFocus,
  multiline,
  testID,
  returnKeyType = 'default',
}) => {
  const errorStyle = !!errorText && styles.errorWrap;

  const [visible, setVisibility] = useState(true);

  return (
    <View style={[styles.wrap, wrapStyle]}>
      {!!label &&
        (typeof label === 'string' || typeof label === 'number' ? (
          <Text style={labelStyle}>{label}</Text>
        ) : (
          label
        ))}
      <View>
        <TextInput
          testID={testID}
          placeholderTextColor={'#909090'}
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
          autoFocus={autoFocus}
          maxLength={maxLength}
          secureTextEntry={visible}
          style={[styles.textInput, textInputStyle, errorStyle]}
          placeholder={placeholder}
          onChangeText={onChange}
          defaultValue={defaultValue}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          value={value}
          editable={editable}
          keyboardType={keyboardType}
          multiline={multiline}
          {...(value ? { value } : {})}
          returnKeyType={returnKeyType}
        />

        <TouchableOpacity
          onPress={() => setVisibility(!visible)}
          style={styles.icons}
        >
          <Image source={visible ? Images.eye : Images.eyeClosed} />
        </TouchableOpacity>
      </View>
      {extraText && extraText}
      {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default _TextInputPassword;
