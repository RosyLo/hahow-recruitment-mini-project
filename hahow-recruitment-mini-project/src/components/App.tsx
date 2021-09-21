import React from 'react';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './style/global';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducer from '../redux/reducers/index';
import helloSaga from './helloSaga';
import rootSaga from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
