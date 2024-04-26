import { BackstageOverrides } from '@backstage/core-components';
import { BackstageOverrides as CatalogReactOverrides } from '@backstage/plugin-catalog-react';
import {
  BackstageTheme,
  createTheme,
  lightTheme,
  pageTheme as defaultPageThemes,
  PageTheme,
} from '@backstage/theme';
import Inter from './Inter-Regular.woff2';
import InterBold from './Inter-Bold.woff2';

import { alpha } from '@material-ui/core/styles';

/**
 * INFO:
 *
 * This theme is build on an old version of the aperture theme in the demo applicaion (https://github.com/backstage/demo/blob/master/packages/app/src/theme/aperture.ts).
 */

const inter = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('Inter'),
    local('Inter-Regular'),
    url(${Inter}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const interBold = {
  fontFamily: 'InterBold',
  fontStyle: 'bold',
  fontWeight: 400,
  src: `
    local('InterBold'),
    local('InterBold-Regular'),
    url(${InterBold}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const pageThemesFontColorOverride: Record<string, PageTheme> = {};
Object.keys(defaultPageThemes).map(key => {
  pageThemesFontColorOverride[key] = {
    ...defaultPageThemes[key],
    fontColor: '#0E1112',
  };
});

const baseTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#535353',
      light: '#B3B3B3',
      dark: '#212121',
    },
    secondary: {
      main: '#FF5630',
      light: '#1DB954',
      dark: '#6554C0',
    },
    grey: {
      50: '#C1C7D0',
      100: '#7A869A',
      200: '#6B778C',
      300: '#5E6C84',
      400: '#505F79',
      500: '#42526E',
      600: '#344563',
      700: '#253858',
      800: '#172B4D',
      900: '#091E42',
    },
    error: {
      main: '#FF5630',
      light: '#FF8F73',
      dark: '#DE350B',
    },
    warning: {
      main: '#FFAB00',
      light: '#FFE380',
      dark: '#FF8B00',
    },
    success: {
      main: '#36B37E',
      light: '#79F2C0',
      dark: '#006644',
    },
    info: {
      main: '#0065FF',
      light: '#4C9AFF',
      dark: '#0747A6',
    },
    navigation: {
      ...lightTheme.palette.navigation,
      background: '#172B4D',
      color: '#FFFFFF',
      indicator: '#2684FF',
      navItem: {
        hoverBackground: 'rgba(116,118,121,0.6)',
      },
    },
    text: {
      primary: '#172B48',
    },
    background: {
      default: '#F8F8F8',
    },
  },
  fontFamily: 'Inter, InterBold, Roboto, sans-serif',
  pageTheme: pageThemesFontColorOverride,
  defaultPageTheme: 'home',
});

const createCustomThemeOverrides = (
  theme: BackstageTheme,
): BackstageOverrides & CatalogReactOverrides => {
  return {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [inter, interBold],
      },
    },
    BackstageInfoCard: {
      headerTitle: { fontFamily: 'InterBold' },
    },
    BackstagePage: {
      root: {
        background: theme.palette.background.default,
        height: 'calc(100vh - 64px)',
      },
    },
    BackstageHeader: {
      header: {
        backgroundImage: 'unset',
        boxShadow: 'unset',
        paddingBottom: theme.spacing(1),
        gridArea: 'pageSubheader',
      },
      title: {
        color: theme.page.fontColor,
        fontWeight: 900,
      },
      subtitle: {
        color: alpha(theme.page.fontColor, 0.8),
      },
      type: {
        color: alpha(theme.page.fontColor, 0.8),
      },
      rightItemsBox: {
        display: 'none',
      },
    },
    // TODO: Remove after https://github.com/backstage/backstage/pull/16853 is available here
    BackstageHeaderLabel: {
      label: {
        color: theme.page.fontColor,
      },
      value: {
        color: alpha(theme.page.fontColor, 0.8),
      },
    },

    BackstageHeaderTabs: {
      tabsWrapper: {
        gridArea: 'pageHeader',
        boxShadow: theme.shadows[1],
      },
      defaultTab: {
        fontSize: 'inherit',
        textTransform: 'none',
        padding: '8px',
      },
    },
    BackstageOpenedDropdown: {
      icon: {
        '& path': {
          fill: '#FFFFFF',
        },
      },
    },
    BackstageTable: {
      root: {
        '&> :first-child': {
          borderBottom: '1px solid #D5D5D5',
          boxShadow: 'none',
        },
        '& th': {
          borderTop: 'none',
          textTransform: 'none !important',
        },
      },
    },
    CatalogReactUserListPicker: {
      title: {
        textTransform: 'none',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 3,
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
      },
    },
    MuiChip: {
      root: {
        borderRadius: 3,
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.primary.dark,
        margin: 4,
      },
    },
    MuiSelect: {
      root: {
        '&[aria-expanded]': {
          backgroundColor: '#26385A',
          color: '#FFFFFF',
        },
      },
    },
    MuiSwitch: {
      root: {
        padding: 10,
      },
      switchBase: {
        padding: 12,
      },
      thumb: {
        backgroundColor: '#FFFFFF',
        height: 14,
        width: 14,
      },
      track: {
        borderRadius: 9,
      },
    },
    MuiTabs: {
      root: { minHeight: '40px' },
      indicator: {
        transition: 'none',
      },
    },
    MuiTypography: {
      button: {
        textTransform: 'none',
      },
      h5: {
        fontFamily: 'InterBold',
      },
    },
  };
};

export const minimalTheme: BackstageTheme = {
  ...baseTheme,
  overrides: {
    ...baseTheme.overrides,
    ...createCustomThemeOverrides(baseTheme),
  },
};
