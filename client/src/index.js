import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Pages/Main.js';
import EnterPage from './Pages/EnterPage.js';
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {window.localStorage.getItem('savedCode') ?
        (<Redirect to={`/Main/${window.localStorage.getItem('savedCode')}`} />) :
        (<Redirect to='/'/>)
      }
      <Route path='/' exact component={EnterPage} />
      <Route path='/Main/:code' exact component={Main} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
