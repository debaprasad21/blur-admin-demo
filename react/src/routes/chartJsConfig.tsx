// Converted from src/app/pages/charts/chartJs/chartJs.module.js

import { ChartOptions } from 'chart.js';
import { useTheme } from 'react-bootstrap';

export const useChartJsConfig = (): ChartOptions => {
  const theme = useTheme();

  const layoutColors = {
    primary: theme.colors.primary,
    danger: theme.colors.danger,
    warning: theme.colors.warning,
    success: theme.colors.success,
    info: theme.colors.info,
    default: theme.colors.default,
    primaryDark: theme.colors.primaryDark,
    successDark: theme.colors.successDark,
    warningLight: theme.colors.warningLight,
    successLight: theme.colors.successLight,
    primaryLight: theme.colors.primaryLight,
    border: theme.colors.border,
    defaultText: theme.colors.defaultText,
  };

  const chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2500,
    },
    scales: {
      gridLines: {
        color: layoutColors.border,
      },
      scaleLabel: {
        fontColor: layoutColors.defaultText,
      },
      ticks: {
        fontColor: layoutColors.defaultText,
        showLabelBackdrop: false,
      },
    },
    elements: {
      line: {
        fill: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return chartOptions;
};
