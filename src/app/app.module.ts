
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
