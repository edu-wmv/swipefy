import * as SecureStore from 'expo-secure-store';

async function saveOnSecureStore(key: string, value: string) {
	await SecureStore.setItemAsync(key, value);
}

async function getFromSecureStore(key: string): Promise<string | null> {
	return await SecureStore.getItemAsync(key);
}

export { saveOnSecureStore, getFromSecureStore };