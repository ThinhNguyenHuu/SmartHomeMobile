import { Actions } from "./actions";

export const initialState = {
  dhtData: {
    temp: null,
    humi: null,
  },
  isMqttConnected: false,
  isBluetoothConnected: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SET_DHT_DATA:
      const { temp, humi } = payload;
      return {
        ...state,
        dhtData: {
          temp: parseFloat(temp.toFixed(1)),
          humi: parseFloat(humi.toFixed(1)),
        }
      }
    case Actions.SET_MQTT_CONNECTED:
      return {
        ...state,
        isMqttConnected: payload,
      }
    case Actions.SET_BLUETOOTH_CONNECTED:
      return {
        ...state,
        isBluetoothConnected: payload,
      }
    default:
      return state;
  }
};
