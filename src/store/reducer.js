import { SIDEBAR_OPEN } from "./actions";

export const initialState = {
  sidebarOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN: {
      const { sidebarOpen } = action;
      return {
        ...state,
        sidebarOpen,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
