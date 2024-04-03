export class Intervention {
    idChaudiere!: string;
    date!: Date;
    description!: string;
    tempPasse!: number;

    constructor(idChaudiere: string, date: Date, description: string, tempPasse: number) {
        this.idChaudiere = idChaudiere;
        this.date = date;
        this.description = description;
        this.tempPasse = tempPasse;
    }
}