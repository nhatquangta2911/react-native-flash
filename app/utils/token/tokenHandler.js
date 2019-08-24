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
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
  },

  async removeData(key) {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  },

  async removeAll() {
    try {
      return await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }
  }
};
