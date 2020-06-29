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
  //baseRoot = "http://localhost:8080"
  //baseRoot = "node:8080"
  //baseRoot = "/api"
  patientsUrl = this.baseRoot + '/patients';
  updatepatientsUrl = this.baseRoot + '/updatepatient';
  deletepatientsUrl = this.baseRoot + '/deletepatient/';
  staffUrl = this.baseRoot + '/staff';
  billsUrl = this.baseRoot + '/bills';
  appointmentrsUrl = this.baseRoot + '/appointments';

  constructor(private _http: HttpClient) { }

  getPatients() {
    return this._http.get<Patient[]>(this.patientsUrl);
  }

  postPatient(query) {
    return this._http.post(this.patientsUrl + query, "");
  }

  updatePatient(query) {
    return this._http.post(this.updatepatientsUrl + query, "");
  }

  deletePatient(query) {
    return this._http.post(this.deletepatientsUrl + query, "");
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

  postAppointment(query) {
    return this._http.post(this.appointmentrsUrl + query, "");
  }
}
