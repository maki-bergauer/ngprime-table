import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="padding: 15px; margin: 20px auto; width: 1250px; border: 1px solid grey; ">
    <ul>
      <li>
      <a routerLink="/t1" routerLinkActive="active">Basic Tabelle with context menu</a>
      </li>
      <li>
      <a routerLink="/t2" routerLinkActive="active">resizable Tabelle</a>
      </li>
      <li>
      <a routerLink="/t3" routerLinkActive="active">reordable Tabelle</a>
      </li>
    </ul>
    <br/>
    <hr/>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`
    li {
      list-style-type: none;
    }
  `]
})
export class AppComponent {

  constructor() { }
}


