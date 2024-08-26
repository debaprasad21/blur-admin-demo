// Converted from src/app/pages/maps/maps.module.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GmapPageCtrl from '../components/GmapPageCtrl';
import LeafletPageCtrl from '../components/LeafletPageCtrl';
import MapBubblePageCtrl from '../components/MapBubblePageCtrl';
import MapLinesPageCtrl from '../components/MapLinesPageCtrl';

const RouteConfig: React.FC = () => {
  return (
    <Switch>
      <Route path="/ui/modals" exact>
        <ModalsPageCtrl items={[]} />
      </Route>
      <Route path="/maps/gmap" exact>
        <GmapPageCtrl />
      </Route>
      <Route path="/maps/leaflet" exact>
        <LeafletPageCtrl />
      </Route>
      <Route path="/maps/bubble" exact>
        <MapBubblePageCtrl />
      </Route>
      <Route path="/maps/line" exact>
        <MapLinesPageCtrl />
      </Route>
    </Switch>
  );
};

export default RouteConfig;
