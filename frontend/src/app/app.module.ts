import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'
import { DataService } from './data.service';
import { PatientsComponent } from './patients/patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StaffComponent } from './staff/staff.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavigationComponent,
    HomeComponent,
    AppointmentsComponent,
    StaffComponent,
    PatientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'patient/:patientId', component: PatientDetailsComponent },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
