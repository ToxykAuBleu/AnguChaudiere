import { Injectable } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';

@Injectable({
  providedIn: 'root'
})
export class ChaudieresService {

  constructor() { }

  getAllChaudieres(): Chaudiere[] {
    return [
      {
        numeroSerie: 1,
        nomClient: "PINGARD Mattis",
        adresseClient: "3 rue de la raviolie, 64100",
        dateMiseService: new Date(2024, 3, 20, 12, 23, 14),
        marque: "Tefal",
        modele: "Quarante Deux",
        interventions: []
      }
    ];
  }

  getChaudiereById(id: number): Chaudiere {
      const chaudiere = this.getAllChaudieres().find(chaudiere => chaudiere.numeroSerie === id);
      if (!chaudiere) throw new Error('Chaudière pas trouvé');
      return chaudiere;
  }
}
