// Converted from src/app/pages/charts/morris/morris.module.js

import { useEffect } from 'react';
import { useTheme } from 'react-bootstrap';

export default function useMorrisConfig() {
  const theme = useTheme();

  useEffect(() => {
    // Assuming Morris is globally available
    if (window.Morris) {
      window.Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
      window.Morris.Donut.prototype.defaults.labelColor = theme.colors.defaultText;
      window.Morris.Grid.prototype.gridDefaults.gridLineColor = theme.colors.borderDark;
      window.Morris.Grid.prototype.gridDefaults.gridTextColor = theme.colors.defaultText;
    }
  }, [theme]);
}
