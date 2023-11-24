import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  constructor() { }

  submitForm() {
    // Add your form submission logic here
    console.log('Form submitted!');

}}
