import React from "react";
import SpaceshipsContainer from "../components/Spaceships/Spaceships";
import notFound from '../assets/notFound.gif';

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/starships"} component={SpaceshipsContainer} />
        <Route
          exact
          path={"/"}
          component={() => <Redirect to={"/starships"} />}
        />
        <Route path={'*'} component={() => <img src={notFound} alt="" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppNavigation;
