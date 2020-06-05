import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills$: Bill[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getBills()
      .subscribe(data => this.bills$ = data);
  }

}
