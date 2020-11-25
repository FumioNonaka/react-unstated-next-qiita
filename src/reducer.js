const reducer = (state, action) => {
	switch (action.type) {
			case 'decrement':
					return {count: state.count - 1};
			case 'increment':
					return {count: state.count + 1};
			default:
					return state;
	}
};
export default reducer;
