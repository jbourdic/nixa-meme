import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/media/';

export default [
  <Route path="/media/create" component={Create} exact key="create" />,
  <Route path="/media/edit/:id" component={Update} exact key="update" />,
  <Route path="/media/show/:id" component={Show} exact key="show" />,
  <Route path="/media/" component={List} exact strict key="list" />,
  <Route path="/media/:page" component={List} exact strict key="page" />
];
