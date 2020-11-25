import React from "react";
import { CounterContainer } from './useCounter';

const CounterDisplay = () => {
	const counter = CounterContainer.useContainer();
	return (
		<div>
			<button onClick={counter.decrement}>-</button>
			<span>{counter.count}</span>
			<button onClick={counter.increment}>+</button>
		</div>
	);
}
export default CounterDisplay;
