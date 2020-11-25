import { useCallback, useReducer } from 'react';
import { createContainer } from 'unstated-next';
import reducer from './reducer';

const useCounter = (initialState = 0) => {
	const [state, dispatch] = useReducer(reducer, { count: initialState });
	const decrement = useCallback(() => dispatch({type: 'decrement'}), []);
	const increment = useCallback(() => dispatch({type: 'increment'}), []);
	return { count: state.count, decrement, increment };
};

export const CounterContainer = createContainer(useCounter);
