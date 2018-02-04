import reducer from '../../modules/counter';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

describe('counter reducer', () => {

	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should return an incremented state', () => {
		expect(reducer(initialState, {type: INCREMENT})).toEqual(
			{
				count: 1,
				isIncrementing: true,
				isDecrementing: false
			}
		);
	});

	it('should return a decremented state', () => {
		expect(reducer(initialState, {type: DECREMENT})).toEqual(
			{
				count: -1,
				isIncrementing: false,
				isDecrementing: true
			}
		);
	});

});