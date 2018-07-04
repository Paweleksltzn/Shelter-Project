// token, authenticated, username\
import * as AuthActions from './auth.action';
import { AppState } from '../../shared/main-ngrx';
export interface FeatureState  extends AppState {
    username: string;
    token: string;
    authenticated: boolean;
}
export interface AuthState {
    username: string;
    token: string;
    authenticated: boolean;
}

const initialState = {
    username: null,
    token: null,
    authenticated: false
};
export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.LOG_IN : {
            const userName = action.payload.username;
            const token = action.payload.token;
            state.token = token;
            state.username = userName;
            state.authenticated = true;
            return {...state};
        }
        case AuthActions.LOG_OUT: {
            state.token = null;
            state.authenticated = false;
            return {...state};
        }
        default: {
            return state;
        }
    }
}
