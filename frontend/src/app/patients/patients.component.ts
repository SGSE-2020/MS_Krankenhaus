import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { DataService } from '../data.service';
import { GlobalVariables} from '../GlobalData';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients$: Patient[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getPatients()
      .subscribe(data => {
          this.patients$ = data;
          GlobalVariables.patients$ = data
      });
  }
  
}
