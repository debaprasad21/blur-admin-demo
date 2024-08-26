// Converted from src/app/pages/form/form.module.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WizardCtrl from '../components/WizardCtrl';

const RouteConfig: React.FC = () => {
  return (
    <Switch>
      <Route path="/form/inputs">
        {/* SECOND AGENT: [MISSING CONTEXT] - The component for Form Inputs needs to be implemented here. */}
      </Route>
      <Route path="/form/layouts">
        {/* SECOND AGENT: [MISSING CONTEXT] - The component for Form Layouts needs to be implemented here. */}
      </Route>
      <Route path="/form/wizard" component={WizardCtrl} />
    </Switch>
  );
};

export default RouteConfig;
