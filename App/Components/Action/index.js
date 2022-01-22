import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors, Images } from "configs";
import Text from "components/Text";
import { sendRemoteCommand } from '../../IoT/RemoteControl';
import { useAppSelector } from "context/AppContext";

const getIcon = (icon) => {
  switch (icon) {
    case 'light':
      return <Image source={Images.light} style={styles.icon}/>
    case 'lightOff':
      return <Image source={Images.lightOff} style={styles.icon}/>
    default:
      return <></>;
  }
}

const ActiveButtonAction = ({ action, doAction }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
          style={[styles.bigCircle, styles.activeBigCircle]}
          onPress={doAction}
        >
          <View style={[styles.smallCircle, styles.activeSmallCircle]}>
            {getIcon(action.icon)}
            <Text color={Colors.White} bold style={styles.textBig}>{action.text}</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

const InactiveButtonAction = ({ action, doAction }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
          style={styles.bigCircle}
          onPress={doAction}
        >
          <View style={styles.smallCircle}>
            {getIcon(action.icon)}
            <Text bold style={styles.textBig}>{action.text}</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

const Action = ({ device, action }) => {
  const { isMqttConnected, isBluetoothConnected } = useAppSelector((state) => state);
  const doAction = useCallback(() => {
    if (!isMqttConnected && !isBluetoothConnected) {
      return;
    }
    sendRemoteCommand(action, isMqttConnected, isBluetoothConnected);
  }, [isMqttConnected, isBluetoothConnected, JSON.stringify(device), JSON.stringify(action)]);

  switch (action.display) {
    case 'activeButton':
      return <ActiveButtonAction action={action} doAction={doAction}/>
    case 'inactiveButton':
      return <InactiveButtonAction action={action} doAction={doAction}/>
    default:
      return <></>;
  }
};

export default Action;

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  bigCircle: {
    backgroundColor: Colors.Gray4,
    width: 200,
    height: 200,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: Colors.Gray4,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },
  activeBigCircle: {
    backgroundColor: 'rgba(0, 151, 157, 0.2)',
    shadowColor: 'rgba(0, 151, 157, 0.2)',
    elevation: 0,
  },
  smallCircle: {
    backgroundColor: Colors.White,
    width: 165,
    height: 165,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: Colors.White,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 2,
  },
  activeSmallCircle: {
    backgroundColor: 'rgba(0, 151, 157, 0.4)',
    shadowColor: 'rgba(0, 151, 157, 0.4)',
    elevation: 1,
  },
  textBig: {
    marginTop: 18,
    fontSize: 24,
  },
});