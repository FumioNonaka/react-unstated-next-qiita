import React from 'react';
import reducer from './reducer';
import { CounterContainer } from './useCounter';
import CounterDisplay from './CounterDisplay';
import './App.css';

function App() {
	return (
		<reducer.Provider>
			<CounterContainer.Provider>
				<div className="App">
					<CounterDisplay />
				</div>
			</CounterContainer.Provider>
		</reducer.Provider>
	);
}

export default App;
