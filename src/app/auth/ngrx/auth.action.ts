import { Action } from '@ngrx/store';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export class LogIn implements Action {
    readonly type = LOG_IN;
    constructor(public payload: {username: string, token: string}) {}
}
export class LogOut implements Action {
    readonly type = LOG_OUT;
    constructor() {}
}
export type AuthActions = LogOut | LogIn;
