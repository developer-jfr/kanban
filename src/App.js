import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Auth/signUp";
import SignIn from "./components/Auth/singIn";
import Header from "./components/Header/Home";

import { withSuspense } from "./hoc/WithSuspense/withSuspense";
//Lazy Loading
const MainTaskLazy = React.lazy(() => import("./components/Task/MainTask"));
const SignInLazy = React.lazy(() => import("./components/Auth/singIn"));
const SignUpLazy = React.lazy(() => import("./components/Auth/signUp"));


//Suspense
const MainTaskSuspense = withSuspense(MainTaskLazy);
const SignInSuspense = withSuspense(SignInLazy);
const SignUpSuspense = withSuspense(SignUpLazy);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/task" component={MainTaskSuspense} />
        <Route path="/signup" component={SignUpSuspense} exact />
        <Route path="/signin" component={SignInSuspense} exact />
      </Switch>
    </Router>
  );
}

export default App;
