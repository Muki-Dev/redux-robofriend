import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import { thunk }  from 'redux-thunk';
import { searchRobots,requestRobots } from './reducers';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons';

const logger = createLogger()
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunk,logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
