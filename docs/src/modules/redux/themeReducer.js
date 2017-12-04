// @flow

import actionTypes from 'docs/src/modules/redux/actionTypes';

const initialState = {
  paletteType: 'light',
  direction: 'ltr',
  customTheme: false,
};

type State = {
  paletteType: string,
  direction: string,
  customTheme: boolean,
};

const mapping = {
  [actionTypes.THEME_CHANGE_PALETTE_TYPE]: (state: State, action) => ({
    ...state,
    paletteType: action.payload.paletteType,
  }),
  [actionTypes.THEME_CHANGE_DIRECTION]: (state: State, action) => ({
    ...state,
    direction: action.payload.direction,
  }),
  [actionTypes.THEME_CHANGE_THEME]: (state: State, action) => ({
    ...state,
    customTheme: action.payload.customTheme,
  }),
};

function themeReducer(state: State = initialState, action: Object) {
  let newState = state;

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  return newState;
}

export default themeReducer;
