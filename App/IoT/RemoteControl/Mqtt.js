import MQTT from "sp-react-native-mqtt";

let mqttClient = null;

const protocol = 'mqtts';
const host = '35f993521eee425e8b57414cd25710ac.s1.eu.hivemq.cloud';
const port = 8883;
const username = 'thinhnguyen';
const password = 'Aa123456';

export const createMqttClient = async (
  onConnected,
  onDisconnected,
  onMessageArrived,
) => {
  mqttClient = await MQTT.createClient({
    uri: `${protocol}://${host}:${port}`,
    tls: true,
    user: username,
    pass: password,
    auth: true,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  });

  mqttClient.on('connect', () => {
    console.log('[MQTT] Connected');
    mqttClient.subscribe('/data/dht', 0);
    onConnected && onConnected();
  });

  mqttClient.on('closed', () => {
    console.log('[MQTT Event closed');
    onDisconnected && onDisconnected();
  });

  mqttClient.on('message', (msg) => {
    console.log('[MQTT] Message arrive: ' + msg?.data);
    onMessageArrived && onMessageArrived(msg);
  });

  mqttClient.on('error', (msg) => {
    console.log('[MQTT] Error occured: ' + msg);
    onDisconnected && onDisconnected();
  });

  mqttClient.connect();
}

export const connectMqtt = async (onConnected, onDisconnected, onMessageArrived) => {
  if (!mqttClient) {
    await createMqttClient(onConnected, onDisconnected, onMessageArrived);
  } else {
    const isConnected = await mqttClient.isConnected();
    if (!isConnected) {
      mqttClient.reconnect();
    }
  }
}

export const disconnectMqtt = () => {
  if (mqttClient) {
    mqttClient.disconnect();
  }
}

export const mqttPublishAction = async (data) => {
  let isConnected = false;
  if (mqttClient) {
    isConnected = await mqttClient.isConnected();
  }
  isConnected && mqttClient.publish('/action', JSON.stringify(data), 0, false);
}