// Converted from src/app/pages/components/tree/tree.module.js

import React from 'react';
import { Route } from 'react-router-dom';

const TreeView = React.lazy(() => import('../components/TreeView'));

const Config1: React.FC = () => {
  return (
    <Route
      path="/tree"
      component={TreeView}
      exact
    />
  );
};

export default Config1;
