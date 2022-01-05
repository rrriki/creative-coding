import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import { Home } from "./views";

export enum AppRoutes {
  HOME = "/home",
}

const routes: RouteProps[] = [
  { path: AppRoutes.HOME, component: Home },
  { path: '*', component: Home }

];

export const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route}></Route>
        ))}
      </Switch>
    </React.Fragment>
  );
};
