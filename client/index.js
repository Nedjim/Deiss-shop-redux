import './stylesheet/index.scss';
import React                              from 'react';
import { render }                         from 'react-dom';
import { Provider }                       from 'react-redux';
import { createStore }                    from 'redux';
import { Router, Route, browserHistory }  from 'react-router';

import ArticleReducer                     from './src/reducers/article';
import Scoreboard                         from './src/containers/Scoreboard';
import Home                               from './src/containers/Home';
import Auth                               from './src/containers/Auth';
import CreateProfile                      from './src/containers/CreateProfile';
import NotFound                           from './src/containers/NotFound';

const store = createStore(
  ArticleReducer,
  window.devToolsExtension && window.devToolsExtension()
);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path='/auth' component={Auth} />
      <Route path='/create' component={CreateProfile} />
      <Route path="/admin/articles" component={Scoreboard} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>
)

render( router,document.getElementById('root'));
