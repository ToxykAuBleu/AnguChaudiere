import { Component, OnInit } from '@angular/core';
import { Intervention } from '../models/intervention.model';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrl: './list-intervention.component.scss'
})
export class ListInterventionComponent implements OnInit {
  listeInterventions!: Intervention[];

  constructor(private interventionService: InterventionsService) {}

  ngOnInit(): void {
    this.interventionService.getAllInterventions().subscribe(interventions => { this.listeInterventions = interventions });
  }
}
