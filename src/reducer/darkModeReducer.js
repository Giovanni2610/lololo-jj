
const initialState = {
  background: '#fff',
  active: false,
}

// Reducer que controla el estado del modo oscuro
export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case '[Theme] Dark Mode':
      return {
        ...state,
        background: '#000',
        active: action.payload,
      };

    case '[Theme] Light Theme':
      return {
        ...state,
        background: '#fff',
        active: action.payload,
      };

    default:
      return state;
  }
}
