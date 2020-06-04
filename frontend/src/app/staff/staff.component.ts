import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff$: Staff[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getStaff()
      .subscribe(data => this.staff$ = data);
  }

}
