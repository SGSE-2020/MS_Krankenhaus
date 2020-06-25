import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient.model';
import { GlobalVariables } from '../globalData';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  patient$: Patient;
  name: string;
  station: string;
  faculty: string;
  symtomps: string;
  diagnosis: string;
  medication: string;
  query: string;
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patient$ = GlobalVariables.patients$[+params.get('patientId')-1];
      this.name = this.patient$.name;
      this.station = this.patient$.station;
      this.faculty = this.patient$.faculty;
      this.symtomps = this.patient$.symptomps;
      this.diagnosis = this.patient$.diagnosis;
      this.medication = this.patient$.medication;
    });
  }

  updatePatient() {
    this.query = "?id=" + this.patient$.userid;
    this.query += "&name=" + this.name;
    this.query += "&station=" + this.station;
    this.query += "&faculty=" + this.faculty;
    this.query += "&symtomps=" + this.symtomps;
    this.query += "&diagnosis=" + this.diagnosis;
    this.query += "&medication=" + this.medication;
    console.log(this.query);
    this.dataService.updatePatient(this.query)
      .subscribe(response => { console.log(response)})
    
  }

}
