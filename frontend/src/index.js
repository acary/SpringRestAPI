import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import Tasks from './components/Tasks';
import TaskAdd from './components/TaskAdd';
import TaskShow from './components/TaskShow';
import TaskEdit from './components/TaskEdit';
import Contacts from './components/Contacts';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/task' component={Tasks} />
        <Route path='/task_add' component={TaskAdd} />
        <Route path='/task_show/:id' component={TaskShow} />
        <Route path='/task_edit/:id' component={TaskEdit} />
        <Route path='/user' component={Contacts} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
