import React, { useMemo } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Images } from "configs";
import Text from "components/Text";
import Action from "components/Action";
import { getDeviceActions } from '../../IoT/Actions';

import styles from './styles';
import { useAppSelector } from "context/AppContext";

const DeviceDetail = ({ route }) => {
  const { device } = route.params;
  const { goBack } = useNavigation();

  const {
    isMqttConnected,
    isBluetoothConnected,
  } = useAppSelector((state) => state);

  const textConnected = useMemo(() => {
    let text = '';
    let color = Colors.Green6;
    if (isMqttConnected && isBluetoothConnected) {
      text = 'MQTT and Bluetooth connected';
    } else if (isMqttConnected) {
      text = 'MQTT connected';
    } else if (isBluetoothConnected) {
      text = 'Bluetooth connected';
    } else {
      text = 'Disconnected';
      color = Colors.Gray6;
    }
    return <Text color={color}>{text}</Text>
  }, [isMqttConnected, isBluetoothConnected])

  const actions = getDeviceActions(device.id);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.buttonBack}>
          <Image source={Images.left} style={styles.icon}/>
        </TouchableOpacity>
        <Text type="H2" bold>{device.name}</Text>
      </View>
      <ScrollView>
        <View style={styles.wrapConnected}>
          {textConnected}
        </View>
        {actions.map((action, index) => (
          <Action device={device} action={action} key={index} />
        ))}
      </ScrollView>
    </View>
  )
};

export default DeviceDetail;
