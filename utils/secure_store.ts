import * as SecureStore from 'expo-secure-store';

async function saveOnSecureStore(key: string, value: string) {
	await SecureStore.setItemAsync(key, value);
}

async function getFromSecureStore(key: string): Promise<string | null> {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log('Error getting data from secure store', error);
		return null;
	}
}

export { saveOnSecureStore, getFromSecureStore };