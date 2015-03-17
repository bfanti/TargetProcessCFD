/** @jsx React.DOM */

var Marty = require("marty");
var React = window.React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var mountNode = document.getElementById("app");

var TargetProcessDataStore = Marty.createStore(
  {
    displayName: "TargetProcessData",

    getInitialState: function()
    {
      return {
        userStories: [],
        defects: []
      };
    }
  });

var HomeComponent = React.createClass(
{
    getInitialState: function()
    {
        return {items: [], text: ''};
    },

    render: function()
    {
        return (
          <div>
            <div className="header">
                <ul className="nav nav-pills pull-right">
                    <li className="active"><Link to="home">Home</Link></li>
                    <li><Link to="dashboard">Dashboard</Link></li>
                </ul>
                <h3 className="text-muted">TP Engineering Dashboard</h3>
            </div>

            <div className="jumbotron">
                <RouteHandler />
            </div>

            <div id="content" className="row marketing">
            </div>

            <div className="footer">
                <p>Bernardo Fanti C 2015</p>
            </div>
          </div>
        );
    }
});

var DashboardIntroComponent = React.createClass(
{
  render: function()
  {
      return (
        <div>
          <h3>Dashboard Info</h3>
          <p>This is our awesome engineering dashboard</p>
        </div>
      );
  }
});

var DashboardComponent = React.createClass(
{
    getInitialState: function()
    {
        return {items: [], text: ''};
    },

    render: function()
    {
        return (
          <div>
            <h2>Dashboard</h2>
            <p>Content</p>
            <ul className="nav nav-pills">
              <li><Link to="dashboard">Reset</Link></li>
              <li><Link to="dashboard-chart-1">Chart 1</Link></li>
            </ul>
            <RouteHandler />
          </div>
        );
    }
});

var DashboardChartComponent = React.createClass(
{
    render: function()
    {
      return (
        <div>
        <h4>CHART!</h4>
        </div>
      );
    }
});

var routes =
(
  <Route name="home" path="/" handler={HomeComponent} >
    <Route name="dashboard" handler={DashboardComponent} >
      <Route name="dashboard-chart-1" handler={DashboardChartComponent} />
    </Route>
    <DefaultRoute handler={DashboardIntroComponent} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler, state)
{
    React.render(<Handler {...state.params} />, mountNode);
});
