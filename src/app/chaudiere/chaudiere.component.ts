import { Component, Input, OnInit } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { ChaudieresService } from '../services/chaudieres.service';

@Component({
  selector: 'app-chaudiere',
  templateUrl: './chaudiere.component.html',
  styleUrl: './chaudiere.component.scss'
})
export class ChaudiereComponent implements OnInit {
  @Input() chaudiere!: Chaudiere;

  constructor(private chaudiereService: ChaudieresService) { }

  ngOnInit(): void {
    if (!this.chaudiere) this.chaudiere = this.chaudiereService.getChaudiereById(1);
  }
}
