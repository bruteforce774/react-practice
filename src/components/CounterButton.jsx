import { useState } from 'react';

function CounterButton() {
	const [count, setCount] = useState(0);

	function incrementCounter() {
		setCount((count) => count + 1);
	}

	return (
		<button onClick={incrementCounter}>
			count is {count}
		</button>
	);
}

export default CounterButton;
