import { Component, OnInit } from '@angular/core';
import { Patient } from './patient.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  patients$: Patient[]
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getPatients()
      .subscribe(data => this.patients$ = data);
  }
}
