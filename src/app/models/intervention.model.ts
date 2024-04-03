export class Intervention {
    id!: string;
    idChaudiere!: string;
    date!: Date;
    description!: string;
    tempPasse!: number;

    constructor(id: string, idChaudiere: string, date: Date, description: string, tempPasse: number) {
        this.id = id;
        this.idChaudiere = idChaudiere;
        this.date = date;
        this.description = description;
        this.tempPasse = tempPasse;
    }
}