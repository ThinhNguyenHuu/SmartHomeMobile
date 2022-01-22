const actionMap = {
  [1]: [
    {
      id: 1,
      key: 'LIGHT_1_ON',
      text: 'ON',
      icon: 'light',
      display: 'activeButton',
    },
    {
      id: 2,
      key: 'LIGHT_1_OFF',
      text: 'OFF',
      icon: 'lightOff',
      display: 'inactiveButton',
    },
  ],
  [2]: [
    {
      id: 3,
      key: 'LIGHT_2_ON',
      text: 'ON',
      icon: 'light',
      display: 'activeButton',
    },
    {
      id: 4,
      key: 'LIGHT_2_OFF',
      text: 'OFF',
      icon: 'lightOff',
      display: 'inactiveButton',
    },
  ],
};

export const getDeviceActions = (deviceId) => {
  return actionMap[deviceId];
}