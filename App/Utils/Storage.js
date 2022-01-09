import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  return await AsyncStorage.setItem(`${key}`, value);
};

export const getData = async (key) => {
  return await AsyncStorage.getItem(`${key}`);
};

export const storeJsonData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log({ e });
  }
};

export const getJsonData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log({ e });
  }
};

export const deleteData = async (key) => {
  return await AsyncStorage.removeItem(key);
};
