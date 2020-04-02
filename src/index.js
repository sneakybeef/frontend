import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import Start from "./components/apps/start";
import Login from "./components/apps/login";
import Checklist from "./components/apps/checklist";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Loginform from "./components/apps/Loginform";
import Register from "./components/register/register";
import Tasks from "./components/apps/tasks";
import AddTask from "./components/addTask/addTask";
const routing = (
  <HashRouter basename="/">
    <Route exact path="/" component={Start} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/tasks" component={Tasks} />
    <Route exact path="/tasks/new" component={AddTask} />
    <Route exact path="/checklist" component={Checklist} />
    <Route exact path="/form" component={Loginform} />
    <Route exact path="/register" component={Register} />
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
