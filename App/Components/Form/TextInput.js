import React from 'react';
import { View, TextInput } from 'react-native';
import Text from 'components/Text';
import styles from './styles/textInputStyles';

const _TextInput = ({
  label,
  placeholder,
  placeholderTextColor,
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
  selectionColor,
  borderBottomOnly,
  testID,
}) => {
  const errorStyle = !!errorText && styles.errorWrap;
  return (
    <View style={[styles.wrap, wrapStyle]}>
      {!!label &&
        (typeof label === 'string' || typeof label === 'number' ? (
          <Text style={labelStyle}>{label}</Text>
        ) : (
          label
        ))}
      <TextInput
        testID={testID}
        placeholderTextColor={placeholderTextColor || '#909090'}
        autoCapitalize={'none'}
        autoCompleteType={'off'}
        autoCorrect={false}
        autoFocus={autoFocus}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        style={[
          styles.textInput,
          textInputStyle,
          borderBottomOnly && styles.borderBottomOnly,
          errorStyle,
        ]}
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
        selectionColor={selectionColor}
        {...(value ? { value } : {})}
      />
      {extraText && extraText}
      {!!errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default _TextInput;
