import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import { DataService } from '../data.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  name: string;
  date: string;
  faculty: string;
  station: string;
  query: string;

  appointments$: Appointment[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = null;
    this.date = null;
    this.faculty = null;
    this.station = null;
    return this.dataService.getAppointments()
      .subscribe(data => this.appointments$ = data);
  }

  createAppointment() {
    this.query = "?patientId=" + this.name;
    this.query += "&station=" + this.station;
    this.query += "&faculty=" + this.faculty;
    this.query += "&time=" + this.date;
    console.log(this.name);
    this.name = null;
    this.date = null;
    this.faculty = null;
    this.station = null;
    console.log(this.query)
    this.dataService.postAppointment(this.query)
      .subscribe(response => {return this.dataService.getAppointments()
        .subscribe(data => this.appointments$ = data);})
  }
}
