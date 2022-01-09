import { StyleSheet } from 'react-native';
import { Colors } from 'configs';

export default StyleSheet.create({
  wrap: {
    marginTop: 20,
  },
  textInput: {
    marginTop: 7,
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    backgroundColor: Colors.White,
    shadowColor: Colors.Gray13,
    borderColor: Colors.Gray5,
    borderWidth: 1,
    color: Colors.Gray9,
  },
  errorText: {
    color: Colors.Error,
    fontSize: 12,
    fontWeight: 'bold',
  },
  errorWrap: {
    borderColor: Colors.Error,
  },
  borderBottomOnly: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});
