import { Product } from './../product.model';
import { TabledataService } from './../tabledata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table3',
  template: `
  <div class="card">
  <h2>Reordable columns</h2>
  <p-table [columns]="cols" [value]="products" [reorderableColumns]="true">
      <ng-template pTemplate="header" let-columns>
          <tr>
            <ng-template ngFor let-col [ngForOf]="columns">
              <th *ngIf="col.value==='category' || col.value==='price'" pReorderableColumn>{{col.value}}</th>
              <th *ngIf="col.value!=='category' && col.value!=='price'">{{col.value}}</th>
            </ng-template>
          </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product let-i="rowIndex" let-cols="columns">
          <tr>
            <td *ngFor="let c of cols">{{product[c.value]}}</td>
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
