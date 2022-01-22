import React from "react";
import { View, Image } from "react-native";
import Text from "components/Text";
import { Colors, Images } from "configs";
import styles from './styles';

const getIcon = (icon) => {
  switch (icon) {
    case 'temp':
      return <Image source={Images.temp} style={styles.icon} />
    case 'humi':
      return <Image source={Images.humi} style={styles.icon} />
    default:
      return <></>;
  }
}

const SensorDataItem = ({ icon, name, value, unit }) => {
  return (
    <View style={styles.wrap}>
      {getIcon(icon)}
      <Text type="H3" bold color={Colors.Gray8} style={styles.textName}>{name}</Text>
      <Text type="H2" bold color={Colors.Black} style={styles.textValue}>{`${value}${unit}`}</Text>
    </View>
  )
};

export default SensorDataItem;