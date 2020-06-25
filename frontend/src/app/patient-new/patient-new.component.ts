import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.css']
})
export class PatientNewComponent implements OnInit {
  name: string;
  station: string;
  faculty: string;
  symtomps: string;
  diagnosis: string;
  medication: string;
  query: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.name = null;
    this.station = null;
    this.faculty = null;
    this.symtomps = null;
    this.diagnosis = null;
    this.medication = null;
  }

  createPatient() {
    this.query = "?name=" + this.name;
    this.query += "&station=" + this.station;
    this.query += "&faculty=" + this.faculty;
    this.query += "&symtomps=" + this.symtomps;
    this.query += "&diagnosis=" + this.diagnosis;
    this.query += "&medication=" + this.medication;
    this.name = null;
    this.station = null;
    this.faculty = null;
    this.symtomps = null;
    this.diagnosis = null;
    this.medication = null;
    console.log(this.query);
    this.dataService.postPatient(this.query)
      .subscribe(response => { console.log(response)})
  }

}
