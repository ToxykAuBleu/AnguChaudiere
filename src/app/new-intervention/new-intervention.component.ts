import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intervention } from '../models/intervention.model';
import { InterventionsService } from '../services/interventions.service';
import { Router } from '@angular/router';
import { Chaudiere } from '../models/chaudiere.model';
import { ChaudieresService } from '../services/chaudieres.service';

@Component({
  selector: 'app-new-intervention',
  templateUrl: './new-intervention.component.html',
  styleUrl: './new-intervention.component.scss'
})
export class NewInterventionComponent implements OnInit {
  formulaire!: FormGroup;
  intervention!: Intervention;
  possibleChaudieres!: Chaudiere[];

  // Définition des champs du formulaire
  // [id, type, label, hint]
  champsForm: [string, string, string, string][] = [
    ["date", "date", "Date d'intervention", "jj/mm/aaaa"],
    ["description", "text", "Description", ""],
    ["tempPasse", "text", "Temps passé", "2 heures 30 minutes"],
    ["idChaudiere", "select", "Chaudière concerné", "1"]
  ];

  constructor(
    private formBuilder: FormBuilder,
    private chaudiereService: ChaudieresService,
    private interventionService: InterventionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      date: [null, [Validators.required]],
      description: [null, [Validators.required]],
      tempPasse: [null, [Validators.required]],
      idChaudiere: [null, [Validators.required]]
    },
      {
        updateOn: 'blur'
      });

    this.formulaire.valueChanges.subscribe(value => {
      this.intervention = {
        id: 0,
        date: value.date,
        description: value.description,
        tempPasse: value.tempPasse,
        idChaudiere: value.idChaudiere
      };
    });

    // Récupération des chaudières pour les afficher dans le select.
    this.chaudiereService.getAllChaudieres().subscribe(chaudieres => {
      this.possibleChaudieres = chaudieres;
    });
  }

  submit(): void {
    // Création de l'objet Intervention venant du formulaire.
    let intervention: Intervention = {
      id: 0,
      date: this.formulaire.value.date,
      description: this.formulaire.value.description,
      tempPasse: this.formulaire.value.tempPasse,
      idChaudiere: this.formulaire.value.idChaudiere
    };

    // Envoi de l'intervention à l'API.
    this.interventionService.addIntervention(intervention).subscribe({
      next: (intervention) => {
        this.router.navigateByUrl("/interventions");
      },
      error: (err) => {
        console.error("Erreur lors de l'envoi de l'intervention: ", err);
        alert("Une erreur est survenue lors de l'envoi de l'intervention.");
      }
    });
  }
}
