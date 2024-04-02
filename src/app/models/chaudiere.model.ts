import { Intervention } from "./intervention.model";

export class Chaudiere {
    nomClient!: string;
    adresseClient!: string;
    marque!: string;
    modele!: string;
    dateMiseService!: Date;
    numeroSerie!: number;
    interventions!: Intervention[];

    constructor(nomClient: string, adresseClient: string, marque: string, modele: string, dateMiseService: Date, numeroSerie: number, interventions: Intervention[] = []) {
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.marque = marque;
        this.modele = modele;
        this.dateMiseService = dateMiseService;
        this.numeroSerie = numeroSerie;
        this.interventions = interventions;
    }
}