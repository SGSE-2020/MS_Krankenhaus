import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';
import { Staff } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  patientsUrl = 'http://localhost:8081/patients';
  staffUrl = 'http://localhost:8081/staff'

  constructor(private _http: HttpClient) { }

  getPatients() {
    return this._http.get<Patient[]>(this.patientsUrl);
  }

  getStaff(){
    return this._http.get<Staff[]>(this.staffUrl);
  }
}
