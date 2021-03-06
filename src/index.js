import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import About from './components/Pages/About';
import Books from './components/Pages/Books';
import Home from './components/Pages/Home';
import Folder from './components/Pages/Folder';
import Mentoring from './components/Pages/Mentoring';
import News from './components/Pages/News';
import NotFound from './components/Pages/NotFound';
import Thanks from './components/Pages/Thanks';
import Tools from './components/Pages/Tools';

import iAmJoiningMetaLab from './components/Pages/News/NewsPosts/020718';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/newsletter/thanks" component={Thanks} />
      <Route path="/about" component={About} />
      {/* <Route path="/books" component={Books} /> */}
      <Route path="/folder" component={Folder} />
      <Route path="/mentoring" component={Mentoring} />
      <Route path="/journal" component={News} />
        <Route path="/journal/i-am-joining-metalab" component={iAmJoiningMetaLab} />
      <Route path="/tools" component={Tools} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
