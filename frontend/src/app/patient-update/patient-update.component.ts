import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  name: string;
  station: string;
  faculty: string;
  symtomps: string;
  diagnosis: string;
  medication: string;
  query: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  updatePatient() {
    
  }

}
