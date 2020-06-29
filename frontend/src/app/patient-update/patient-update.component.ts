import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.patient$ = GlobalVariables.patients$[+params.get('patientId')-1];
      this.name = this.patient$.name;
      this.station = this.patient$.station;
      this.faculty = this.patient$.faculty;
      this.symtomps = this.patient$.symtomps;
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
    
    this.router.navigate(['/patient', this.patient$.userid]);
  }

  deletePatient() {
    this.dataService.deletePatient("?id=" + this.patient$.userid).subscribe(response => { console.log(response)});
    this.router.navigate(['/patients']);
  }

  abort() {
    this.router.navigate(['/patient', this.patient$.userid]);
  }

}
