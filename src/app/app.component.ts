import { Product } from './product.model';
import { TabledataService } from './tabledata.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``]
})
export class AppComponent implements OnInit {
  products: Product[];

    selectedProduct: Product;
    items: MenuItem[];

    constructor(private productService: TabledataService) { }

    ngOnInit() {
        this.productService.getProducts().subscribe(data => this.products = data);

        this.items = [
            {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)}
        ];
    }

    viewProduct(p: Product) {
      alert(JSON.stringify(p));
    }
}


