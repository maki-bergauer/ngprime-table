import { AppComponent } from './../app.component';
import { Product } from './../product.model';
import { TabledataService } from './../tabledata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  template: `
  <div class="card">
  <h5>Scrollable with Variable Width</h5>
  <p-table [columns]="cols" [value]="products" #dt>
      <ng-template pTemplate="header" let-columns>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
          <tr>
            <th>
              <input pInputText type="text" (input)="dt.filter($event.target.value, 'code', 'contains')" placeholder="Search by code" class="p-column-filter">
            </th>
            <th>
              <input pInputText type="text" (input)="dt.filter($event.target.value, 'name', 'contains')" placeholder="Search by name" class="p-column-filter">
            </th>
            <th>
              <input pInputText type="text" (input)="dt.filter($event.target.value, 'category', 'contains')" placeholder="Search by category" class="p-column-filter">
            </th>
            <th>
              <input pInputText type="text" (input)="dt.filter($event.target.value, 'price', 'contains')" placeholder="Search by price" class="p-column-filter">
            </th>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product let-i="rowIndex">
          <tr>
            <td>{{product[0].code}}</td>
            <td>{{product[0].name}}</td>
            <td>{{product[0].category}}</td>
            <td>{{product[0].price}}</td>
          </tr>
      </ng-template>
  </p-table>
</div>
  `,
  styles: [
  ]
})
export class Table4Component implements OnInit {

  products: object;

  cols = [
    { value: 'code' },
    { value: 'name' },
    { value: 'category' },
    { value: 'price' }
  ];

  constructor(private productService: TabledataService) { }

  ngOnInit(): void {
    this.productService.getProductsOtherStructure().subscribe(data => this.products = data);
  }

}
