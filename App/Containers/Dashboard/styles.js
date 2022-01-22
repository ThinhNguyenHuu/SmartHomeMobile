import { Colors } from "configs";
import { getStatusBarHeight } from "configs/Constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingTop: getStatusBarHeight() + 40,
  },
  textTime: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  textWelcome: {
    marginHorizontal: 16,
  },
  wrapSensorData: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: Colors.White,
    borderRadius: 6,
    shadowColor: Colors.Gray9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  verticalLine: {
    width: 0.7,
    height: '70%',
    backgroundColor: Colors.Gray6,
  },
  textDevice: {
    margin: 16,
    marginTop: 32,
  },
  boxDevices: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
});