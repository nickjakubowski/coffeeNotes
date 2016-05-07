var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var NotesInput = require('../components/NotesInput');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="notes" component={NotesInput} />
    <IndexRoute component={Home} />
  </Route>
);