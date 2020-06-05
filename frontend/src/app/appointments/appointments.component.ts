import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments$: Appointment[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getAppointments()
      .subscribe(data => this.appointments$ = data);
  }
}
