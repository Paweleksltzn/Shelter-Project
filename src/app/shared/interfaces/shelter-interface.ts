import { ShelterInside } from './shelter-inside-interface';

export class Shelter {
    config?: ShelterInside;
    name: string;
    adress: string;
    phoneNumber: number;
    city: string;
    lng?: number;
    lat?: number;
    constructor(name: string, adress: string, city: string, phoneNumber: number) {
        this.name = name;
        this.adress = adress;
        this.city = city;
        this.phoneNumber = phoneNumber;
    }
}
