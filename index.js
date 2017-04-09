import React                from 'react';
import { render }           from 'react-dom';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import ArticleReducer       from './src/reducers/article';
import Scoreboard           from './src/containers/Scoreboard';

const store = createStore(
  ArticleReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root')
);
