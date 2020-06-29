import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Patient } from '../patient.model';
import { PatientsComponent } from '../patients/patients.component';
import { GlobalVariables} from '../globalData';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient$: Patient;
  patients$: Patient[]

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dataService.getPatients()
      .subscribe(data => {
          this.patients$ = data;
          GlobalVariables.patients$ = data
          this.patient$ = GlobalVariables.patients$[+params.get('patientId')-1];
    });
    });
   
  }

}
