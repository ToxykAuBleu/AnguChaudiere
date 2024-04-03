export class Chaudiere {
    nomClient!: string;
    adresseClient!: string;
    marque!: string;
    modele!: string;
    dateMiseService!: Date;
    numeroSerie!: string;

    constructor(nomClient: string, adresseClient: string, marque: string, modele: string, dateMiseService: Date, numeroSerie: string) {
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.marque = marque;
        this.modele = modele;
        this.dateMiseService = dateMiseService;
        this.numeroSerie = numeroSerie;
    }
}