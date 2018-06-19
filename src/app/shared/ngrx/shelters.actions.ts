import {Action} from '@ngrx/store';
import { Shelter } from '../interfaces/shelter-interface';

export const ADD_SHELTER = 'ADD_SHELTER';

export class AddShelter implements Action {
    readonly type = ADD_SHELTER;
    constructor(public payload: Shelter) {

    }
}

export type ShelterActions = AddShelter;
