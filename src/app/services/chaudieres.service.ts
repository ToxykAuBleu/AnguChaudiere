import { Injectable } from '@angular/core';
import { Chaudiere } from '../models/chaudiere.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChaudieresService {

  constructor(private http: HttpClient) { }

  getAllChaudieres(): Observable<Chaudiere[]> {
    return this.http.get<Chaudiere[]>('http://localhost:3000/chaudieres');
  }

  getChaudiereById(id: string): Observable<Chaudiere> {
    return this.http.get<Chaudiere>('http://localhost:3000/chaudieres/' + id);    
  }
}
