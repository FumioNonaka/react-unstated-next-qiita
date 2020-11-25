import { useCallback } from 'react';
import { createContainer } from 'unstated-next';
import reducer from './reducer';

const useCounter = (initialState = 0) => {
	const { count, dispatch } = reducer.useContainer(reducer);
	const decrement = useCallback(() => dispatch({type: 'decrement'}), []);
	const increment = useCallback(() => dispatch({type: 'increment'}), []);
	return { count, decrement, increment };
};

export const CounterContainer = createContainer(useCounter);
