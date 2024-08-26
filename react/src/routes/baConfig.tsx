// Converted from src/app/theme/theme.configProvider.js

import colorHelper from '../utils/constants/colorHelper';

type BasicColors = {
  default: string;
  defaultText: string;
  border: string;
  borderDark: string;
};

type ColorScheme = {
  primary: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
};

type DashboardColors = {
  blueStone: string;
  surfieGreen: string;
  silverTree: string;
  gossip: string;
  white: string;
};

type ThemeConfig = {
  theme: {
    blur: boolean;
  };
  colors: {
    default: string;
    defaultText: string;
    border: string;
    borderDark: string;
    primary: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
    primaryLight: string;
    infoLight: string;
    successLight: string;
    warningLight: string;
    dangerLight: string;
    primaryDark: string;
    infoDark: string;
    successDark: string;
    warningDark: string;
    dangerDark: string;
    dashboard: DashboardColors;
  };
  changeTheme: (theme: Partial<ThemeConfig['theme']>) => void;
  changeColors: (colors: Partial<ThemeConfig['colors']>) => void;
};

const basic: BasicColors = {
  default: '#ffffff',
  defaultText: '#666666',
  border: '#dddddd',
  borderDark: '#aaaaaa',
};

const colorScheme: ColorScheme = {
  primary: '#209e91',
  info: '#2dacd1',
  success: '#90b900',
  warning: '#dfb81c',
  danger: '#e85656',
};

const dashboardColors: DashboardColors = {
  blueStone: '#005562',
  surfieGreen: '#0e8174',
  silverTree: '#6eba8c',
  gossip: '#b9f2a1',
  white: '#10c4b5',
};

const baConfig: ThemeConfig = {
  theme: {
    blur: false,
  },
  colors: {
    default: basic.default,
    defaultText: basic.defaultText,
    border: basic.border,
    borderDark: basic.borderDark,
    primary: colorScheme.primary,
    info: colorScheme.info,
    success: colorScheme.success,
    warning: colorScheme.warning,
    danger: colorScheme.danger,
    primaryLight: colorHelper.tint(colorScheme.primary, 30),
    infoLight: colorHelper.tint(colorScheme.info, 30),
    successLight: colorHelper.tint(colorScheme.success, 30),
    warningLight: colorHelper.tint(colorScheme.warning, 30),
    dangerLight: colorHelper.tint(colorScheme.danger, 30),
    primaryDark: colorHelper.shade(colorScheme.primary, 15),
    infoDark: colorHelper.shade(colorScheme.info, 15),
    successDark: colorHelper.shade(colorScheme.success, 15),
    warningDark: colorHelper.shade(colorScheme.warning, 15),
    dangerDark: colorHelper.shade(colorScheme.danger, 15),
    dashboard: {
      blueStone: dashboardColors.blueStone,
      surfieGreen: dashboardColors.surfieGreen,
      silverTree: dashboardColors.silverTree,
      gossip: dashboardColors.gossip,
      white: dashboardColors.white,
    },
  },
  changeTheme: function (theme) {
    Object.assign(this.theme, theme);
  },
  changeColors: function (colors) {
    Object.assign(this.colors, colors);
  },
};

export default baConfig;
