export class Intervention {
    id!: number;
    idChaudiere!: string;
    date!: Date;
    description!: string;
    tempPasse!: number;

    constructor(id: number, idChaudiere: string, date: Date, description: string, tempPasse: number) {
        this.id = id;
        this.idChaudiere = idChaudiere;
        this.date = date;
        this.description = description;
        this.tempPasse = tempPasse;
    }
}