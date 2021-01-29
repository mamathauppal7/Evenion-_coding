import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  selectedYear='';
  selectedMonth='';
 year=['2012','2013','2014','2015'];
 month=['January','February','March','April','May','June','July','August','September','October','November','December'];

 onSelectedYear(event){
   this.selectedYear=event;
 }

 onSelectedMonth(event){
 this.selectedMonth=event;
 }
 

}
