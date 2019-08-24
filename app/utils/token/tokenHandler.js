import AsyncStorage from '@react-native-community/async-storage';

export default {
  async storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  },
  async getData(key) {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
};
