import { types } from "../types/types";

const initialState = {
    logged: false,
    user: 'admin'
}

// Controla la entrada de los usuarios....
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }

}
