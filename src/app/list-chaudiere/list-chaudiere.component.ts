import { Component, OnInit } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { ChaudieresService } from '../services/chaudieres.service';

@Component({
  selector: 'app-list-chaudiere',
  templateUrl: './list-chaudiere.component.html',
  styleUrl: './list-chaudiere.component.scss'
})
export class ListChaudiereComponent implements OnInit {
  listeChaudieres!: Chaudiere[];

  constructor(private chaudiereService: ChaudieresService) {}

  ngOnInit(): void {
    this.chaudiereService.getAllChaudieres().subscribe(chaudieres => { this.listeChaudieres = chaudieres });
  }
}
