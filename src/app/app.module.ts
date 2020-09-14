import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
import { TcellComponent } from './tcell/tcell.component';

@NgModule({
  declarations: [
    AppComponent,
    TcellComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
