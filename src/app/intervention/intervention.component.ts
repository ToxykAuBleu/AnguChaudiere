import { Component, Input } from '@angular/core';
import { Intervention } from '../models/intervention.model';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrl: './intervention.component.scss'
})
export class InterventionComponent {
  @Input() intervention!: Intervention;
}
