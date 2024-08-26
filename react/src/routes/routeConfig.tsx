// Converted from src/app/pages/ui/modals/modals.module.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModalsPageCtrl from '../components/ModalsPageCtrl';

const RouteConfig: React.FC = () => {
  return (
    <Switch>
      <Route path="/ui/modals" exact>
        <ModalsPageCtrl items={[]} />
      </Route>
    </Switch>
  );
};

export default RouteConfig;
