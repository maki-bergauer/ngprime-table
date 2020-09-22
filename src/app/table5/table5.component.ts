import { Product } from './../product.model';
import { TabledataService } from './../tabledata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  template: `
  <div class="card">
    <h5>Scrollable with Variable Width</h5>
    <br/>
    <p-inputSwitch [(ngModel)]="isMultiSelect"></p-inputSwitch>
    <br/>
    {{selectionModeText}}
    <hr/>

    <p-table [value]="products" selectionMode="{{isMultiSelect? 'multiple' : 'single'}}" [(contextMenuSelection)]="selectedProduct" [metaKeySelection]="true" dataKey="code">
        <ng-template pTemplate="header" let-columns>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-i="rowIndex">
            <tr [pSelectableRow]="product">
              <td>{{product.code}}</td>
              <td>{{product.name}}</td>
              <td>{{product.category}}</td>
              <td>{{product.price}}</td>
            </tr>
        </ng-template>
    </p-table>
  </div>
  `,
  styles: [
  ]
})
export class Table5Component implements OnInit {
  private _isMultiSelect: boolean;
  selectionModeText: string;

  set isMultiSelect(val: boolean) {
    this._isMultiSelect = val;
    this.selectionModeText = this._isMultiSelect? 'multiple' : 'single';
  }

  get isMultiSelect() {
    return this._isMultiSelect;
  }

  selectedProduct: Product[];

  products: Product[];

  cols = [
    { value: 'code' },
    { value: 'name' },
    { value: 'category' },
    { value: 'price' }
  ];

  constructor(private productService: TabledataService) {
    this.isMultiSelect = true;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

}
