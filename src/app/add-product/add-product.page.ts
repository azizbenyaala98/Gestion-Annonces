import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductCategory } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  product: Product = {
    title: '',
    category:'',
    price: null,
    owner: '', // You may set this to the current user's ID
    imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png', // Uncomment this line if you want to include imageUrl
  };
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    console.log("form to complete")
  }
   onSubmit() {
 console.log("on submit")
 if (this.validateForm()) {
  this.productService.addProduct(this.product).then(() => {
    this.router.navigate(['/user-dashboard']);
  });
}

    }


private validateForm(): boolean {
  // Implement form validation logic if needed
  return true;
}}
