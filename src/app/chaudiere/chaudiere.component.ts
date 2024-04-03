import { Component, Input, OnInit } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { ChaudieresService } from '../services/chaudieres.service';
import { ActivatedRoute } from '@angular/router';
import { Intervention } from '../models/intervention.model';

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
    private route: ActivatedRoute)
  { }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    if (this.id !== undefined) {
      this.chaudiereService.getChaudiereById(this.id).subscribe((chaudiere: Chaudiere) => {
         this.laChaudiere = chaudiere;
      });
    } else {
      this.laChaudiere = this.chaudiere;
    };
  }
}
