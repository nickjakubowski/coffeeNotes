import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import NotesInput from '../components/NotesInput';
import { Router, Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={Main}>
    <Route path="notes" component={NotesInput} />
    <IndexRoute component={Home} />
  </Route>
);