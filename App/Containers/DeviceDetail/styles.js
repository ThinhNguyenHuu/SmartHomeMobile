import { Colors } from "configs";
import { getStatusBarHeight } from "configs/Constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingTop: getStatusBarHeight() + 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonBack: {
    padding: 8,
    paddingLeft: 0, 
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 16,
  },
  wrapConnected: {
    alignItems: 'center',
    marginTop: 12,
  }
});