import { useState, useEffect, useCallback, useContext } from "react";
import NetInfo from "@react-native-community/netinfo";
import { AppContext } from "context/AppContext";
import { Actions } from "context/actions";
import { connectMqtt, disconnectMqtt } from "iot/RemoteControl/Mqtt";
import { ToastBottomHelper } from "utils/Utils";

const useMqttConnection = () => {
  const { setAction } = useContext(AppContext);
  const [networkConnected, setNetworkConnected] = useState(false); 

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkConnected(state.isConnected);
    });
    return unsubscribe;
  }, []);

  const onMqttMessageArrived = useCallback((msg) => {
    setAction(Actions.SET_DHT_DATA, JSON.parse(msg.data));
  }, [setAction]);

  const onMqttConnected = useCallback(() => {
    setAction(Actions.SET_MQTT_CONNECTED, true);
    ToastBottomHelper.success('MQTT connected');
  }, [setAction]);

  const onMqttDisconnected = useCallback(() => {
    setAction(Actions.SET_MQTT_CONNECTED, false);
  }, [setAction]);

  useEffect(() => {
    if (networkConnected) {
      connectMqtt(onMqttConnected, onMqttDisconnected, onMqttMessageArrived);
    } else {
      disconnectMqtt();
    }
  }, [networkConnected]);
};

export default useMqttConnection;
