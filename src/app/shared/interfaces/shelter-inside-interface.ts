import { Animal } from './animal-interface';

export interface ShelterInside {
    animals: Animal[],
    items: Item[]
}

interface Item {
    amount: number,
    name: string
}
