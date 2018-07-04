import { Shelter } from '../interfaces/shelter-interface';
import * as ShelterActions from './shelters.actions';
export interface SheltersStateInterface {
    Shelters: Shelter[];
    editedShelterIndex: number;
    editedShelter: Shelter;
}
const initialState: SheltersStateInterface = {
    Shelters : [],
    editedShelterIndex : -1,
    editedShelter : null
};

export function shelterListReducer(state = initialState, action: ShelterActions.ShelterActions) {
    switch (action.type) {
        case ShelterActions.ADD_SHELTER: {
            return {...state, Shelters: [...state.Shelters, action.payload] };
        }
        default: {
            return state;
        }
    }
}
