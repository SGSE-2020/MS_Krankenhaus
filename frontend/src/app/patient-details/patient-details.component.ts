import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Patient } from '../patient.model';
import { PatientsComponent } from '../patients/patients.component';
import { GlobalVariables} from '../globalData';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient$: Patient;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.patient$ = GlobalVariables.patients$[+params.get('productId')];
    });
  }

}
