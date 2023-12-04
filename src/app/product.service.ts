// product.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: AngularFirestore){}
  addProduct(product: Product): Promise<void> {
    // Use the AngularFirestore collection to add the product
    return this.firestore.collection('products').add(product)
      .then((docRef) => {
        console.log('Product added with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  }
}