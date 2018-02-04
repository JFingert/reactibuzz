import React from 'react';

const FizzBuzz = props => (
  <h1>{returnValue(props.count)}</h1>
);

function returnValue(count) {
	/*
		Intentionally not catching negative numbers. 
		Could be acheived by adding `(count < 0) ? count :`
		as the first check.
	*/
	let returnValue = 
		(count === 0) ? 0 : 
		(count % 3 === 0 && count % 5 === 0) ? 'FizzBuzz' : 
		(count % 3 === 0) ? 'Fizz' : 
		(count % 5 === 0) ? 'Buzz' : 
		count;

	return returnValue;
}

export default FizzBuzz;