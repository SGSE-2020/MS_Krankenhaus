import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Patient, Query} from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Observable<Patient[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
        query allPatients {
          allPatienst {
            id
          }
        }
      `
    })
      .valueChanges
      .subscribe(result => {
        console.log(result);
      });
  }

}
