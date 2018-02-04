import React from 'react';
import FizzBuzz from './index';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('FizzBuzz', () => {

  it('it should return "Fizz"', function() {

  	let count = 3;
  	const renderer = new ShallowRenderer();
	renderer.render(<FizzBuzz count={count} />);
	const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual('Fizz');

  });

  it('it should return "Buzz"', function() {
  	
  	let count = 5;
  	const renderer = new ShallowRenderer();
	renderer.render(<FizzBuzz count={count} />);
	const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual('Buzz');

  });

  it('it should return "FizzBuzz"', function() {
  	
  	let count = 15;
  	const renderer = new ShallowRenderer();
	renderer.render(<FizzBuzz count={count} />);
	const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual('FizzBuzz');

  });

  it('it should return the number passed', function() {
  	
  	let count = 7;
  	const renderer = new ShallowRenderer();
	renderer.render(<FizzBuzz count={count} />);
	const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual(count);

  });

});