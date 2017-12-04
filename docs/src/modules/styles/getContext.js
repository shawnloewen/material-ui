// @flow weak
/* eslint-disable no-underscore-dangle */

import { create, SheetsRegistry } from 'jss';
import rtl from 'jss-rtl';
import { preset } from 'material-ui/styles/withStyles';
import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

export function getTheme(theme) {
  if (!theme.customTheme) {
    return createMuiTheme({
      customTheme: theme.customTheme,
      direction: theme.direction,
      palette: {
        primary: blue,
        secondary: pink,
        type: theme.paletteType,
      },
    });
  }

  return createMuiTheme({
    // Custom CX properties
    shrink: true,
    customTheme: theme.customTheme,
    direction: theme.direction,
    palette: {
      primary: red,
      // secondary: green,
      type: theme.paletteType,
    },
    typography: {
      display4: {
        '@media (max-width: 767px)': {
          fontSize: '2rem',
        },
        '@media (min-width: 768px)': {
          fontSize: '2.5rem',
        },
        '@media (min-width: 992px)': {
          fontSize: '3rem',
        },

        // fontSize: "3rem"
      },
      display3: {
        fontSize: '2.5rem',
      },
      display2: {
        fontSize: '2.0rem',
      },
      display1: {
        fontSize: '1.5rem',
      },
    },
    breakpoints: {
      values: {
        xs: 360,
        sm: 768, // Override for CX standard.  Original is 600.  Not sure if this works...
        md: 992, // Override for CX standard.  Original is 960
        lg: 1280,
        xl: 1920,
      },
    },

    // Overrides to the base theme CSS
    overrides: {
      MuiButton: {
        root: {},
        dense: {},
        label: {},
        flatPrimary: {},
        flatAccent: {},
        flatContrast: {},
        colorInherit: {},
        raised: {
          boxShadow: {},
          paddingLeft: 40,
          paddingRight: 40,
        },
        keyboardFocused: {},
        raisedPrimary: {},
        raisedAccent: {},
        raisedContrast: {},
        disabled: {},
        fab: {},
      },
      MuiCheckbox: {
        default: {},
        checked: {},
        disabled: {},
      },
      MuiDialog: {
        root: {},
        paper: {},
        paperWidthXs: {},
        paperWidthSm: {},
        paperWidthMd: {},
        fullWidth: {},
        fullScreen: {},
      },
      MuiDialogActions: {
        root: {},
        action: {},
        button: {},
      },
      MuiDialogContent: {
        root: {},
      },
      MuiDialogTitle: {
        root: {},
      },
      MuiDivider: {
        root: {},
        default: {},
        inset: {},
        light: {},
        absolute: {},
      },
      MuiFormControl: {
        root: {},
        marginNormal: {},
        marginDense: {},
        fullWidth: {},
      },
      MuiFormControlLabel: {
        root: {},
        disabled: {},
        label: {},
      },
      MuiFormGroup: {
        root: {},
        row: {},
      },
      MuiFormHelperText: {
        root: {},
        dense: {},
        error: {
          fontFamily: 'Roboto',
          fontSize: 16,
          color: red[800],
          border: '1px solid #c62828',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 5.5,
          paddingBottom: 5.5,
          marginTop: 10,
          position: 'relative',
          '&:before': {
            borderColor: '#c62828',
            borderStyle: 'solid',
            borderWidth: '1px 0 0 1px',
            backgroundColor: grey[50],
            transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
            position: 'absolute',
            content: "''",
            backgroundImage: 'none',
            zIndex: '2',
            width: '0.6666em',
            height: '0.6666em',
            transition: 'background .1s ease',
            top: '0',
            left: '50%',
            marginTop: '-1px',
            boxSizing: 'inherit',
          },
        },
        disabled: {},
      },
      MuiGrid: {},
      MuiInput: {
        root: {
          backgroundColor: grey[100],
          borderTop: {
            color: grey[200],
            width: 3,
            style: 'solid',
          },
        },
        formControl: {},
        inkbar: {},
        error: {},
        input: {},
        inputAdorned: {},
        inputDense: {},
        disabled: {},
        focused: {},
        underline: {
          '&:before': {
            backgroundColor: 'rgba(0,0,0,0)',
          },
        },
        multiline: {},
        inputDisabled: {},
        inputSingleline: {},
        inputSearch: {},
        inputMultiline: {},
        fullWidth: {},
      },
      MuiInputAdornment: {
        root: {},
        positionStart: {},
        positionEnd: {},
      },
      MuiInputLabel: {
        root: {
          color: grey[800],
        },
        formControl: {},
        labelDense: {},
        shrink: {},
        animated: {},
        disabled: {},
      },
      MuiMenu: {
        root: {},
      },
      MuiMenuItem: {
        root: {},
        selected: {},
      },
      MuiRadio: {
        default: {
          height: 34,
          width: 16,
          fontSize: 16,
        },
        checked: {
          color: grey[800],
        },
        disabled: {},
      },
      MuiSelect: {
        root: {},
        select: {},
        selectMenu: {},
        disabled: {},
        icon: {},
      },
      MuiTypography: {
        root: {},
        // Use CX h1 settings
        display4: {
          fontFamily: 'Montserrat',
          // fontWeight: "bold",
          color: grey[800],
          // '@media (max-width: 767px)': {
          //   fontSize: 30,
          //   lineHeight: "40px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 768px)': {
          //   fontSize: 36,
          //   lineHeight: "50px",
          //   marginTop: 60,
          //   marginBottom: 40,
          // },
          // '@media (min-width: 992px)': {
          //   fontSize: 48,
          //   lineHeight: "60px",
          //   marginTop: 80,
          //   marginBottom: 60,
          // },
        },
        // Use CX h2 settings
        display3: {
          fontFamily: 'Montserrat',
          // fontWeight: 600,
          color: grey[800],
          // '@media (max-width: 767px)': {
          //   fontSize: 24,
          //   lineHeight: "30px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 768px)': {
          //   fontSize: 30,
          //   lineHeight: "40px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 992px)': {
          //   fontSize: 36,
          //   lineHeight: "50px",
          //   marginTop: 60,
          //   marginBottom: 40,
          // },
        },
        // Use CX h3 settings
        display2: {
          fontFamily: 'Montserrat',
          // '@media (max-width: 767px)': {
          //   fontSize: 21,
          //   lineHeight: "30px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 768px)': {
          //   fontSize: 24,
          //   lineHeight: "30px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 992px)': {
          //   fontSize: 30,
          //   lineHeight: "40px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
        },
        // Use CX h4 settings
        display1: {
          fontFamily: 'Montserrat',
          // '@media (max-width: 767px)': {
          //   fontSize: 18,
          //   lineHeight: "30px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 768px)': {
          //   fontSize: 21,
          //   lineHeight: "30px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
          // '@media (min-width: 992px)': {
          //   fontSize: 24,
          //   lineHeight: "30px",
          //   marginTop: 40,
          //   marginBottom: 20,
          // },
        },
        headline: {
          fontFamily: 'Montserrat',
        },
        title: {
          fontFamily: 'Montserrat',
        },
        subheading: {
          fontFamily: 'Montserrat',
        },
        body2: {},
        body1: {},
        caption: {},
        button: {},
        alignLeft: {},
        alignCenter: {},
        alignRight: {},
        alignJustify: {},
        noWrap: {},
        gutterBottom: {},
        paragraph: {},
        colorInherit: {},
        colorPrimary: {},
        colorSecondary: {},
        colorAccent: {},
        colorError: {},
      },
    },
  });
}

const theme = getTheme({
  direction: 'ltr',
  paletteType: 'light',
  customTheme: false,
});

// Configure JSS
const jss = create({ plugins: [...preset().plugins, rtl()] });
jss.options.createGenerateClassName = createGenerateClassName;
jss.options.insertionPoint = 'insertion-point-jss';

function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: jss.options.createGenerateClassName(),
  };
}

export default function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
