import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
