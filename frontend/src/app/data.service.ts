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
  patientsUrl = '/api/patients';
  staffUrl = '/api/staff';
  billsUrl = '/api/bills';
  appointmentrsUrl = '/api/appointments';

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
