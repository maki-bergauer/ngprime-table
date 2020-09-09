import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor() { }

  getProducts() : Observable<Product[]> {
    return of([
      new Product(1, 'a1','b1','c1','d1'),
      new Product(2, 'a2','b2','c2','d2'),
      new Product(3, 'a3','b3','c3','d3'),
    ]);
  }
}
