import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-patient',
  template: `
    <div *ngIf="loading">
      Loading...
    </div>
    <div *ngIf="error">
      Error :(
    </div>
    <div *ngIf="allPatients">
      <div *ngFor="let patient of allPatients">
        <p>{{patient.id}}: {{patient.id}}</p>
      </div>
    </div>
  `,
})
export class PatientComponent implements OnInit {
  allPatients: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: gql`
          {
            allPatients {
              id
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.allPatients = result.data && result.data.allPatients;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}