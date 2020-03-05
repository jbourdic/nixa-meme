import React from 'react';
import { Route } from 'react-router-dom';
import {Register, Login} from "../components/user";

export default [
  <Route path="/register" component={Register} exact key="register" />,
  <Route path="/login" component={Login} exact key="login" />,
];
