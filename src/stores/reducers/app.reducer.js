export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

const initState = {
  miniSidebar: false
};

export function toggleSidebar() {
  return dispatch => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
}

export default function themeReducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        miniSidebar: !state.miniSidebar
      };

    default:
      return state;
  }
}
