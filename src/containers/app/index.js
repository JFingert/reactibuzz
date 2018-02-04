import React from 'react';
import { Route, Link } from 'react-router-dom';
import { history } from '../../store';
import Count from '../count';
import About from '../../components/about';

const App = () => (
  <div className="container">
    <header>
      <Link to="/" className={ (history.location.pathname === '/' ? 'active' : '') }>About</Link>
      <Link to="/count" className={ (history.location.pathname === '/count' ? 'active' : '') }>Counter</Link>
    </header>

    <main>
      <Route exact path="/" component={About} />
      <Route exact path="/count" component={Count} />
    </main>
  </div>
);

export default App;