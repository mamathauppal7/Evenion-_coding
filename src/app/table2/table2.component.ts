import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  @Input() filteredYear: string;
  @Input() filteredMonth:string;
  table2: { year: string; month: string; price: string; }[];

  constructor() { 
    this.table2=[
      {year:'2012',month:'December',price:'$400'},
      {year:'2012',month:'January',price:'$900'},
      {year:'2013',month:'February',price:'$800'},
      {year:'2015',month:'April',price:'$920'}
       ]
  }
  ngOnInit(): void {
  }

}
