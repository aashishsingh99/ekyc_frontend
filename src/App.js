import React, { Fragment, useEffect } from "react";
import NavBar from "./containers/layout/Navbar";
import Landing from "./containers/layout/Landing";
import { Provider } from "react-redux";
import { loadUser,loadUser2 } from "./actions/auth";
import Register from "./containers/auth/Register";
import Register2 from "./containers/auth/Register2";
import Login from "./containers/auth/Login";
import Alert from "./containers/alert";
import Dashboard from "./containers/dashboard/dashboard";
import Dashboard2 from "./containers/dashboard/dashboard2.js";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import chat from "./containers/Chat";
import "./App.css";
const App = () => {
  useEffect(() => {
    // check for token in LS

    store.dispatch(loadUser());
    store.dispatch(loadUser2());
  }, []);
  // log user out from all tabs if they log out in one tab

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              
              <Route exact path="/register" component={Register} />
              <Route exact path="/register2" component={Register2} />
              <Route exact path="/chat" component={chat} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} /> */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/dashboard2" component={Dashboard2} />
              {/* <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />
              <PrivateRoute
                exact
                path="/ShowRequests"
                component={ShowRequests}
              /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
