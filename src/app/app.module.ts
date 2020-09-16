import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
import { TcellComponent } from './tcell/tcell.component';
import { Table2Component } from './table2/table2.component';
import { Table1Component } from './table1/table1.component';
import { Routes, RouterModule } from '@angular/router';
import { Table3Component } from './table3/table3.component';

const myRoutes: Routes = [
  {path: '', redirectTo: 't1', pathMatch: 'full' },
  {path: 't1', component: Table1Component},
  {path: 't2', component: Table2Component},
  {path: 't3', component: Table3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    TcellComponent,
    Table2Component,
    Table1Component,
    Table3Component
  ],
  imports: [
    BrowserModule,
    TableModule,
    ContextMenuModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
