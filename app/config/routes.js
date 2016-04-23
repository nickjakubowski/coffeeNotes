var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var MainNotes = require('../components/MainNotes');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="notes" component={MainNotes} />
    <IndexRoute component={Home} />
  </Route>
);