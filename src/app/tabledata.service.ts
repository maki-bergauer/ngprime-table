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
      new Product(1, 'a1','b1','c1',15.70),
      new Product(2, 'a2','b2','c2',1873.10),
      new Product(3, 'a3','b3','c3',19.33),
<<<<<<< HEAD
    ]);
  }

  getProductsOtherStructure() : Observable<object> {
    return of([
      [new Product(1, 'a1','b1','c1',15.70)],
      [new Product(2, 'a2','b2','c2',1873.10)],
      [new Product(3, 'a3','b3','c3',19.33)],
=======
>>>>>>> refs/remotes/origin/master
    ]);
  }
}
