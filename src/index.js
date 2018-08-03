import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


import Home from './components/Home';
import AllAlbums from './components/AllAlbums';
import Albums from './components/Albums';
import Photo from './components/Photo';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/albums" component={AllAlbums}/>
        <Route path="/albums/:name" component={Albums}/>
        <Route path="/photo/:id" component={Photo}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
