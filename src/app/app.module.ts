import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
<<<<<<< HEAD
import {InputSwitchModule} from 'primeng/inputswitch';

=======
>>>>>>> refs/remotes/origin/master
import { TcellComponent } from './tcell/tcell.component';
import { Table2Component } from './table2/table2.component';
import { Table1Component } from './table1/table1.component';
import { Routes, RouterModule } from '@angular/router';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
<<<<<<< HEAD
import { Table5Component } from './table5/table5.component';

const myRoutes: Routes = [
  {path: '', redirectTo: 'table1', pathMatch: 'full' },
  {path: 'table1', component: Table1Component},
  {path: 'table2', component: Table2Component},
  {path: 'table3', component: Table3Component},
  {path: 'table4', component: Table4Component},
  {path: 'table5', component: Table5Component}
=======

const myRoutes: Routes = [
  {path: '', redirectTo: 't1', pathMatch: 'full' },
  {path: 't1', component: Table1Component},
  {path: 't2', component: Table2Component},
  {path: 't3', component: Table3Component},
  {path: 't4', component: Table4Component}
>>>>>>> refs/remotes/origin/master
];

@NgModule({
  declarations: [
    AppComponent,
    TcellComponent,
    Table2Component,
    Table1Component,
    Table3Component,
<<<<<<< HEAD
    Table4Component,
    Table5Component
=======
    Table4Component
>>>>>>> refs/remotes/origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    ContextMenuModule,
<<<<<<< HEAD
    InputSwitchModule,
=======
>>>>>>> refs/remotes/origin/master
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
