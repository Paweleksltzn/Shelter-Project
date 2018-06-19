
export class Animal {
    name: string;
    race: string;
    age: number;
    specialCharms?: string[];
    constructor(name: string, race: string, age: number, specialCharms: string[]) {
        this.name = name;
        this.race = race;
        this.age = age;
        this.specialCharms = specialCharms;
    }
}
