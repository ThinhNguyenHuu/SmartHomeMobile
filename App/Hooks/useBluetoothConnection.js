import { useEffect, useCallback, useContext } from "react";
import { initializeBluetoothConnection, cleanUpBluetoothConnection, scanBluetoothDevice } from "iot/RemoteControl/Bluetooth";
import { AppContext } from "context/AppContext";
import { Actions } from "context/actions";

const useBluetoothConnection = () => {
  const { setAction } = useContext(AppContext);

  const onBluetoothConnected = useCallback((isConnected) => {
    setAction(Actions.SET_BLUETOOTH_CONNECTED, isConnected);
  }, [setAction]);

  useEffect(() => {
    initializeBluetoothConnection(onBluetoothConnected);
    return cleanUpBluetoothConnection;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scanBluetoothDevice();
    }, 15000);
    return () => clearInterval(interval);
  }, []);
};

export default useBluetoothConnection;
