import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'app_settings';

export type AppSettings = {
  maxStackSize: number;  // 5–50
};

const DEFAULTS: AppSettings = {
  maxStackSize: 30,
};

export const settingsService = {
  async load(): Promise<AppSettings> {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : DEFAULTS;
  },

  async save(settings: AppSettings): Promise<void> {
    await AsyncStorage.setItem(KEY, JSON.stringify(settings));
  },
};
