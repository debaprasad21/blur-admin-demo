// Converted from src/app/pages/components/mail/mail.module.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailTabCtrl from '../components/MailTabCtrl';
import MailListCtrl from '../components/MailListCtrl';
import MailDetailCtrl from '../components/MailDetailCtrl';

const RouteConfig: React.FC = () => {
  return (
    <Switch>
      <Route path="/mail" exact>
        <MailTabCtrl />
      </Route>
      <Route path="/mail/:label" exact>
        <MailListCtrl />
      </Route>
      <Route path="/mail/:label/:id" exact>
        <MailDetailCtrl />
      </Route>
    </Switch>
  );
};

export default RouteConfig;
