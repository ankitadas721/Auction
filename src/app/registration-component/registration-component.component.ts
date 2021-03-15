import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  userName: any;
  userEmail: any;
  userAddress: any;
  userPasswordConfirm: any;
  userPassword: any;
  userPhone: any;
  userRegisterAs: any;
  constructor() { }

  ngOnInit(): void {
  }
  Validation() {
    console.log(this.userPasswordConfirm);
    console.log(this.userPassword);
    if (this.userPasswordConfirm != this.userPassword) {
      alert("Registered password and confirm password must be same");
    }

  }
}
