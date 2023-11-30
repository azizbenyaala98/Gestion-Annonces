import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public ngFireAuth :AngularFireAuth) { }
  async registeruser(email:string,password:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }
  async loginUser(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
    console.log(this.ngFireAuth.currentUser)

  }
  async resetPassword(email:string){
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }
  async signout(){
    return await this.ngFireAuth.signOut()
  }
async getProfile(){
  return await this.ngFireAuth.currentUser
}
getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    this.ngFireAuth.authState.subscribe(
      (user) => resolve(user),
      (error) => reject(error)
    );
  });
}
}
