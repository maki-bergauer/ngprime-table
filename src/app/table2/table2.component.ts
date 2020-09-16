import { TabledataService } from './../tabledata.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  template: `
  <div class="card">
  <h5>Scrollable with Variable Width</h5>
  <p-table [value]="products" [scrollable]="true" scrollHeight="200px" [resizableColumns]="true" styleClass="p-datatable-gridlines">
      <ng-template pTemplate="colgroup">
          <colgroup>
              <col style="width:25%">
              <col style="width:15%">
              <col style="width:35%">
              <col style="width:25%">
          </colgroup>
      </ng-template>
      <ng-template pTemplate="header">
          <tr>
              <th pResizableColumn>Code</th>
              <th pResizableColumn>Name</th>
              <th pResizableColumn>Category</th>
              <th pResizableColumn>Price</th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
          <tr>
          <td>{{product.code}}</td>
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
export class Table2Component implements OnInit {
  products: Product[];

  constructor(private productService: TabledataService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

}
