import { Component, Input, OnInit } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { ChaudieresService } from '../services/chaudieres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaudiere',
  templateUrl: './chaudiere.component.html',
  styleUrl: './chaudiere.component.scss'
})
export class ChaudiereComponent implements OnInit {
  @Input() chaudiere!: Chaudiere;
  laChaudiere!: Chaudiere;
  id!: number;

  constructor(
    private chaudiereService: ChaudieresService,
    private route: ActivatedRoute)
  { }

  ngOnInit(): void {    
    this.id = Number(this.route.snapshot.params['id']);
    if (!Number.isNaN(this.id)) {
      this.laChaudiere = this.chaudiereService.getChaudiereById(this.id);
    } else {
      this.laChaudiere = this.chaudiere;
    };
  }
}
