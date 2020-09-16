import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tcell',
  template: `
  
    <td>
      <ng-content></ng-content>
    </td>
  
  `,
  styles: [
    ':host { display: contents; }'
  ]
})
export class TcellComponent implements OnInit {
  @ViewChild('tmp') tmp: any;

  constructor() { }

  ngOnInit(): void {
  }

}
