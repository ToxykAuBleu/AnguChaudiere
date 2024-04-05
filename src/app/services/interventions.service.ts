import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Intervention } from '../models/intervention.model';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  constructor(private http: HttpClient) { }

  getAllInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>('http://localhost:3000/interventions');
  }

  getInterventionById(id: string): Observable<Intervention> {
    return this.http.get<Intervention>('http://localhost:3000/interventions/' + id);    
  }

  getInterventionsByIdChaudiere(idChaudiere: string): Observable<Intervention[]> {
    return this.http.get<Intervention[]>('http://localhost:3000/interventions?idChaudiere=' + idChaudiere);
  }

  addIntervention(intervention: Intervention): Observable<Intervention> {
    return this.getAllInterventions().pipe(
      switchMap(interventions => {
        let maxId = 0;
        interventions.forEach(inter => { maxId = (inter.id > maxId ? inter.id : maxId); });
        intervention.id = maxId + 1;
        return this.http.post<Intervention>('http://localhost:3000/interventions', intervention);
      }
      ));
  }
}
