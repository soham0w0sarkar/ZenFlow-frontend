export const Fetch = async (url, method, fetch) => {
	try {
		const response = await fetch(url, {
			method: method,
			credentials: 'include'
		});

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
};
