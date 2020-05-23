import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8081/patients';

  constructor(private _http: HttpClient) { }

  getPatients() {
    return this._http.get<Patient[]>(this.apiUrl);
  }
}
