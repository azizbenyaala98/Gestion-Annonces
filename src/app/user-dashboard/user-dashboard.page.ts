import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  activeUser:string;
  userId: string;


  constructor(private auth:AuthService,
    private router :Router,
    private route: ActivatedRoute
    ){}
  ngOnInit() {
    console.log("user dashboard launched")
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', this.userId);
    const currentUser=this.sub(this.auth.currentUser().email)
    this.activeUser=currentUser
    console.log(currentUser)
}
logout(){
  this.auth.signout()
  this.router.navigateByUrl('/login')
}
sub(input: string): string {
  const atIndex = input.indexOf('@');

  if (atIndex !== -1) {
    return input.substring(0, atIndex);
  }

  // If "@" is not found, return the original string or handle it as needed
  return input;
}

ToAddProduct(){
  console.log("ready to add product")
  this.router.navigate(['/user-dashboard/add-product'])
}
}