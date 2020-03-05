import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/post/';

export default [
  <Route path="/posts/create" component={Create} exact key="create" />,
  <Route path="/posts/edit/:id" component={Update} exact key="update" />,
  <Route path="/posts/show/:id" component={Show} exact key="show" />,
  <Route path="/posts/" component={List} exact strict key="list" />,
  <Route path="/posts/:page" component={List} exact strict key="page" />
];
