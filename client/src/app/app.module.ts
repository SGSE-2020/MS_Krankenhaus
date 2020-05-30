import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
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


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavigationComponent,
    HomeComponent,
    AppointmentsComponent,
    StaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
