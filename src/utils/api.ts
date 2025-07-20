export const fetchMessage = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout (() => {
			const shouldFail = Math.random() > 0.5
			if (shouldFail) {
				reject(new Error('Failed to fetch message'))
			} else {
				resolve("Hello, world!")
			}
		}, 1000)
	})
}