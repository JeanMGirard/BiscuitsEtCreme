import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  

  // PRODUCT SERVICES
  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
  createProduct(product: Product) {
    return this.firestore.collection('products').add(product);
  }
  updateProduct(product: Product) {
    return this.firestore.doc('products/' + product.id).update(product);
  }
  setProduct(product: Product){
    return this.firestore.doc('products/'+product.id).set(product);
  }
  deleteProduct(product: Product) {
    return this.firestore.doc('products/' + product.id).delete();
  }
  deleteDocument(docId: string) {
    return this.firestore.doc('products/' + docId).delete();
  }

  setProducts(products: Product[]) {
    for(const product of products) {
      this.firestore.doc('products/'+product.id).set(product);
    }
  }
  
}
