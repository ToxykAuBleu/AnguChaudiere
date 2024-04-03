import { Component, Input, OnInit } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { ChaudieresService } from '../services/chaudieres.service';
import { ActivatedRoute } from '@angular/router';
import { Intervention } from '../models/intervention.model';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-chaudiere',
  templateUrl: './chaudiere.component.html',
  styleUrl: './chaudiere.component.scss'
})
export class ChaudiereComponent implements OnInit {
  @Input() chaudiere!: Chaudiere;
  laChaudiere!: Chaudiere;
  id!: string;
  interventions: Intervention[] = [];

  constructor(
    private chaudiereService: ChaudieresService,
    private interventionService: InterventionsService,
    private route: ActivatedRoute)
  { }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    if (this.id !== undefined) {
      // Récupération de la chaudière.
      this.chaudiereService.getChaudiereById(this.id).subscribe(chaudiere => {
         this.laChaudiere = chaudiere;
         this.refreshInterventions();
      });
    } else {
      this.laChaudiere = this.chaudiere;
      this.refreshInterventions();
    };

  }

  refreshInterventions() {
    this.interventionService.getInterventionsByIdChaudiere(this.laChaudiere.id).subscribe(interventions => {
      this.interventions = interventions;
    });
  }
}
