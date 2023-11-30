import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup
  
  constructor(public formBuilder : FormBuilder,
    public loadingCtrl:LoadingController,
    public authService:AuthService,
    public router :Router) { }

  
    ngOnInit() {
      this.loginForm=this.formBuilder.group({
        
        email:['',[
          Validators.required,
          Validators.email,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
        ]],
        password:['',[
          Validators.required,
          Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
        ]]
         
      })
  
        
    }
    get  ErrorControl(){

      return this.loginForm?.controls;
    }
  
    /*async login(){
      const loading =await this.loadingCtrl.create();
      await loading.present();
      if (this.loginForm?.valid){
        const user = await this.authService.loginUser(
          this.loginForm.value.email,this.loginForm.value.password).catch((error)=>{
            console.log(error);
            loading.dismiss()
          })
          if(user){
            loading.dismiss()
            this.router.navigate(['/user-dashboard/']);
            console.log(this.authService.getProfile)
  
          }
          else{
            console.log("provide correct values")
          }
  
      }
  
    }*/
    async login() {
      const loading = await this.loadingCtrl.create();
      await loading.present();
    
      if (this.loginForm?.valid) {
        try {
          const user = await this.authService.loginUser(
            this.loginForm.value.email, this.loginForm.value.password
          );
    
          if (user) {
            loading.dismiss();
    
            // Use authService.getProfile to get user information
            const userProfile = await this.authService.getProfile();
    
            console.log('User Profile:', userProfile);
    
            // Navigate to user dashboard with user ID
            if (userProfile?.uid) {
              this.router.navigate(['/user-dashboard', userProfile.uid]);
            } else {
              console.error('User profile is missing the UID.');
            }
          } else {
            console.log('Provide correct values');
          }
        } catch (error) {
          console.error('An error occurred during login:', error);
          loading.dismiss();
        }
      }
    }
    
  

}
