// Converted from docs/contents/articles/013-create-new-page/index.md

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
      <Route path="/alerts">
        {/* SECOND AGENT: [MISSING CONTEXT] - The component for Alerts needs to be implemented here. */}
      </Route>
      <Route path="/myNewPage">
        {/* SECOND AGENT: [MISSING CONTEXT] - The component for My New Page needs to be implemented here. */}
      </Route>
    </Switch>
  );
};

export default RouteConfig;
