import { NativeModules, NativeEventEmitter, PermissionsAndroid } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { stringToBytes } from "convert-string";

const BleManagerModule = NativeModules.BleManager || {}
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)

const serviceUUID = '9c1c732b-42ff-4a4e-b534-377c36563cc4';
const characteristicUUID = 'c557048e-a081-4bc3-9fa0-7582474915d6';

async function getBluetoothScanPermission() {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    {
      title: 'Bluetooth Permission',
      message: 
        'In the next dialogue, Android will ask for permission for this ' +
        'App to access your location. This is needed for being able to ' +
        'use Bluetooth to scan your environment for peripherals.',
      buttonPositive: 'OK'
      },
  )
  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    console.log('BleManager.scan will *NOT* detect any peripherals!')
  }
}

let bleDevice = null;

export const scanBluetoothDevice = async () => {
  console.log('start scan');
  await getBluetoothScanPermission()
  await BleManager.scan([], 5)
}

export const initializeBluetoothConnection = async (onBleConnected) => {
  bleManagerEmitter.addListener("BleManagerDidUpdateState", async (args) => {
    if (args.state === 'on') {
      console.log('Ble on');
      await BleManager.start({ forceLegacy: true })
      await scanBluetoothDevice();
    } else if (args.state === 'off') {
      console.log('Ble off');
      bleDevice = null;
      onBleConnected(false);
    }
  });
  bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', async (peripheral) => {
    // console.log(peripheral);
    if (peripheral.name === 'ESP32') {
      if (bleDevice?.isConnected) {
        return;
      }
      let isConnected = await BleManager.isPeripheralConnected(peripheral.id, []);
      if (!isConnected) {
        try {
          await BleManager.connect(peripheral.id);
          isConnected = true;
        } catch (e) {}
      }
      peripheral.isConnected = isConnected;
      bleDevice = peripheral;
      onBleConnected(true);
    }
  });
  bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', (args) => {
    if (bleDevice && bleDevice.id === args.peripheral) {
      bleDevice.isConnected = false;
      onBleConnected(false);
    }
  });

  await BleManager.start({ forceLegacy: true })
  await scanBluetoothDevice();
}

export const cleanUpBluetoothConnection = () => {
  bleManagerEmitter.removeAllListeners('BleManagerDidUpdateState');
  bleManagerEmitter.removeAllListeners('BleManagerDiscoverPeripheral');
  bleManagerEmitter.removeAllListeners('BleManagerDisconnectPeripheral');
}

export const writeBleData = async (data) => {
  await BleManager.connect(bleDevice.id);
  const bytesData = stringToBytes(data);
  await BleManager.write(bleDevice.id, serviceUUID, characteristicUUID, bytesData)
}