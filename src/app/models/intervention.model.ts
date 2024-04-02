export class Intervention {
    date!: Date;
    description!: string;
    tempPasse!: number;

    constructor(date: Date, description: string, tempPasse: number) {
        this.date = date;
        this.description = description;
        this.tempPasse = tempPasse;
    }
}