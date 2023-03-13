export const saveLocalStorage = (key: string, value: Object | string): void => {
	const stringify: string = typeof value === "string" ? value : JSON.stringify(value);
	localStorage.setItem(key, stringify);
}

export const getLocalStorage = (key: string) => {
	const result: string | null = localStorage.getItem(key);
	return !!result && JSON.parse(result)
}