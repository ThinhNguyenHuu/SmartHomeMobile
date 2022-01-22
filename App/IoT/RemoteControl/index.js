import { mqttPublishAction } from "./Mqtt"
import { writeBleData } from "./Bluetooth";
import { ToastBottomHelper } from "utils/Utils";

function SendCommandException() {}

const sendCommandViaMqtt = async (action) => {
  try {
    await mqttPublishAction(action.key);
    ToastBottomHelper.success('Trigger action via MQTT success');
  } catch (e) {
    console.log(e);
    ToastBottomHelper.error('Trigger action via MQTT failed');
  }
}

const sendCommandViaBluetooth = async (action) => {
  try {
    await writeBleData(action.key);
    ToastBottomHelper.success('Trigger action via Bluetooth success');
  } catch (e) {
    console.log(e);
    ToastBottomHelper.error('Trigger action via Bluetooth failed');
    throw new SendCommandException();
  }
}

export const sendRemoteCommand = async (action, isMqttConnected, isBluetoothConnected) => {
  if (isBluetoothConnected) {
    try {
      await sendCommandViaBluetooth(action);
    } catch (e) {
      if (e instanceof SendCommandException && isMqttConnected) {
        await sendCommandViaMqtt(action);
      }
    }
  } else if (isMqttConnected) {
    await sendCommandViaMqtt(action);
  }
}