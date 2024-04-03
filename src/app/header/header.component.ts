import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = "AnguChaudière";
  public currentRoute!: string;  


  constructor(private router: Router) {
    // Ajout d'un event pour connaître en temps réel la route.
    // (Utilisé pour le style de la navbar)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
