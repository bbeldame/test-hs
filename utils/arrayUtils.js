export const randomizeArray = (array) => {
	let newArray = [...array];
	return newArray.sort(() => Math.random() - 0.5);
};
