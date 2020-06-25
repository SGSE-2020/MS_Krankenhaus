import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient.model';
import { Staff } from './staff.model';
import { Appointment } from './appointment.model';
import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseRoot = "http://localhost:8080"
  //baseRoot = "node:8080"
  //baseRoot = "/api"
  patientsUrl = this.baseRoot + '/patients';
  staffUrl = this.baseRoot + '/staff';
  billsUrl = this.baseRoot + '/bills';
  appointmentrsUrl = this.baseRoot + '/appointments';

  constructor(private _http: HttpClient) { }

  getPatients() {
    return this._http.get<Patient[]>(this.patientsUrl);
  }

  getStaff(){
    return this._http.get<Staff[]>(this.staffUrl);
  }

  getBills(){
    return this._http.get<Bill[]>(this.billsUrl);
  }

  getAppointments(){
    return this._http.get<Appointment[]>(this.appointmentrsUrl);
  }
}
