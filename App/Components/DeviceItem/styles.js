import { StyleSheet } from "react-native";
import { Constants, Colors } from "configs";

const marginItem = 12;
const marginHorizontal = 16;
const widthItem = (Constants.width - marginHorizontal * 2 - marginItem) / 2;
const heightItem = (widthItem / 166) * 126;

export default StyleSheet.create({
  wrap: {
    width: widthItem,
    height: heightItem,
    padding: 12,
    borderRadius: 10,
    shadowColor: Colors.Shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: Colors.White,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  icon: {
    width: 50,
    height: 50,
  }
})