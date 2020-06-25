import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';


import { PatientsComponent } from './patients/patients.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StaffComponent } from './staff/staff.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { BillsComponent } from './bills/bills.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { LoginComponent } from './login/login.component';
import { PatientNewComponent } from './patient-new/patient-new.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
    {
      path: '', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        
      ]
    },
    {path: 'home', component: HomeComponent},
    { path: 'staff', component: StaffComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'patient/:patientId', component: PatientDetailsComponent },
    { path: 'bills', component: BillsComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'newpatient', component: PatientNewComponent },
    { path: 'updatepatient', component: PatientUpdateComponent },
    {path: 'login', component: LoginComponent, data: {authGuardPipe: redirectLoggedInToHome}},
  
    // If there is not match, redirect to home
    {path: '**', redirectTo: ''}
  ];

const routerOptions: ExtraOptions = {
  useHash: false,
};

export const AppRoutingModule = RouterModule.forRoot(routes, routerOptions);