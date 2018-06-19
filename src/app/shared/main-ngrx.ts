import { ActionReducerMap } from '@ngrx/store';
import * as shelterReducer from './ngrx/shelters.reducer';

export interface AppState {
    sheltersList: shelterReducer.SheltersStateInterface;
}

export const reducers: ActionReducerMap<AppState> = {
    sheltersList: shelterReducer.shelterListReducer
};
