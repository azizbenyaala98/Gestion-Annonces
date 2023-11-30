import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  currentUser: string =''
  userId: string;

  constructor(public authService : AuthService,
    private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', this.userId);



    this.authService.getCurrentUser()
      .then((user) => {
        this.currentUser = this.sub(user.email);
        console.log('Current User:', this.currentUser);
      })
      .catch((error) => {
        console.error('Error getting current user:', error);
      });
  
}

 sub(input: string): string {
  const atIndex = input.indexOf('@');

  if (atIndex !== -1) {
    return input.substring(0, atIndex);
  }

  // If "@" is not found, return the original string or handle it as needed
  return input;
}
}