import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Text from "components/Text";
import { Images } from "configs";
import styles from './styles';
import Routes from "utils/Routes";

const getIcon = (icon) => {
  switch (icon) {
    case 'light':
      return <Image source={Images.light} style={styles.icon}/>
    default:
      return <></>;
  }
}

const DeviceItem = ({ item }) => {
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate(Routes.DeviceDetail, {
      device: item,
    });
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrap}>
        {getIcon(item.icon)}
        <Text type="H4" bold>{item.name}</Text>
      </View>
    </TouchableWithoutFeedback> 
  )
};

export default DeviceItem;
