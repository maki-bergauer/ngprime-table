import { AppComponent } from './../app.component';
import { Product } from './../product.model';
import { TabledataService } from './../tabledata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  template: `
  <div class="card">
  <h5>Scrollable with Variable Width</h5>
  <p-table [columns]="cols" [value]="products" [reorderableColumns]="true">
      <ng-template pTemplate="header" let-columns>
          <tr>
              <th *ngFor="let col of columns" pReorderableColumn>{{col.value}}</th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product let-i="rowIndex">
          <tr>
          <td>{{product.code}}, index = {{i}}</td>
          <td>{{product.name}}</td>
          <td>{{product.category}}</td>
          <td>{{product.price | currency: 'USD'}}</td>
          </tr>
      </ng-template>
  </p-table>
</div>
  `,
  styles: [
  ]
})
export class Table3Component implements OnInit {

  products: Product[];

  cols = [
    { value: 'code'},
    { value: 'name'},
    { value: 'category'},
    { value: 'price' }
  ];

  constructor(private productService: TabledataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

}
