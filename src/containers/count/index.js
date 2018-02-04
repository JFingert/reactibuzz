import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from '../../modules/counter';
import FizzBuzz from '../../components/fizzbuzz';

const Count = props => (
  <div className="container">
    <h2>Count as much as you'd like</h2>
    <FizzBuzz count={props.count} />
    <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
    <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
    <div className="key">
      <p>*Multiples of 3 will display as "Fizz"</p>
      <p>Multiples of 5 will display as "Buzz"</p>
      <p>Multiples of both 3 and 5 will display as "FizzBuzz"</p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  decrement
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);