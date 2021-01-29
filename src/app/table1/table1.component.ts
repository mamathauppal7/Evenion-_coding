import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  @Input() filteredYear: string;
  @Input() filteredMonth:string;
  table1: { year: string; month: string; price: string; }[];
  constructor() {
    this.table1=[
      {year:'2012',month:'January',price:'$400'},
      {year:'2013',month:'February',price:'$900'},
      {year:'2014',month:'March',price:'$800'},
      {year:'2014',month:'May',price:'$920'}
    ]
   }

  ngOnInit(): void {
    console.log(this.filteredYear);
    console.log(this.filteredMonth);
  }
  
}
