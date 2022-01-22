import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import moment from "moment";

import Text from "components/Text";
import SensorDataItem from "components/SensorDataItem";
import DeviceItem from "components/DeviceItem";
import useMqttConnection from "hooks/useMqttConnection";
import useBluetoothConnection from "hooks/useBluetoothConnection";

import styles from './styles';
import { Colors } from "configs";
import { useAppSelector } from "context/AppContext";

const devices = [
  {
    id: 1,
    icon: 'light',
    name: 'Light 1',
  },
  {
    id: 2,
    icon: 'light',
    name: 'Light 2',
  }
]

const Dashboard = () => {
  const { dhtData } = useAppSelector((state) => state);

  useMqttConnection();

  useBluetoothConnection();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text type="Body" style={styles.textTime}>{moment().format('dddd MMMM DD, YYYY')}</Text>
        <Text type="H2" bold style={styles.textWelcome}>{'Welcome to Smart Home'}</Text>
        <View style={styles.wrapSensorData}>
          <SensorDataItem
            icon="temp"
            name="Temperature"
            value={dhtData.temp !== null ? dhtData.temp : '--'}
            unit="°C"
          />
          <View style={styles.verticalLine}/>
          <SensorDataItem
            icon="humi"
            name="Humidity"
            value={dhtData.humi !== null ? dhtData.humi : '--'}
            unit="%"
          />
        </View>
        <Text type="H3" bold color={Colors.Gray9} style={styles.textDevice}>{'Devices'}</Text>
        <View style={styles.boxDevices}>
          {devices.map((item, index) => (
            <DeviceItem key={index} item={item}/>
          ))}
        </View>
      </ScrollView>
    </View>
  )
};

export default Dashboard;
