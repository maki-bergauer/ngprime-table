import { TabledataService } from './../tabledata.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-table1',
  template: `
  <div class="card" style="padding: 10px; display: flex; height: calc(100vh - 330px); border: 3px solid green; flex-direction: column; justify-content: space-between;">
  <p>it works...</p>
  <p-contextMenu #cm [model]="items"></p-contextMenu>
  <div class="" style="border: 1px solid red;">
      <p-table [value]="products" [(contextMenuSelection)]="selectedProduct" [contextMenu]="cm" dataKey="code">
          <ng-template pTemplate="header">
              <tr>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
              </tr>
          </ng-template>
          <ng-template pTemplate="body" let-product>
              <tr [pContextMenuRow]="product">
                  <td>{{product.code}}</td>
                  <td>{{product.name}}</td>
                  <td>{{product.category}}</td>
                  <td>{{product.price | currency: 'USD'}}</td>
              </tr>
              <!-- <tr [pContextMenuRow]="product">
                  <app-tcell>{{product.code}}</app-tcell>
                  <app-tcell>{{product.name}}</app-tcell>
                  <app-tcell>{{product.category}}</app-tcell>
                  <app-tcell>{{product.price | currency: 'USD'}}</app-tcell>
              </tr> -->
          </ng-template>
      </p-table>
  </div>
</div>
  `,
  styles: [
  ]
})
export class Table1Component implements OnInit {
  products: Product[];

  selectedProduct: Product;
  items: MenuItem[];

  constructor(private productService: TabledataService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => this.products = data);

    this.items = [
      { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct) }
    ];
  }

  viewProduct(p: Product) {
    alert(JSON.stringify(p));
  }

}
