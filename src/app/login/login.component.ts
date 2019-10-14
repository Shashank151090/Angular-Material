import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dataService: DataTransferService) { }

  username: string;

  password: string;
  showSpinner: boolean = false;
  userData:any;


  ngOnInit() {
  }

  login() {
    if(this.username && this.password ) {
      this.userData = {
        'userName': this.username,
        'password': this.password
      }

      this.dataService.addUserData(this.userData);
      this.router.navigate(["dashboard"]);
    } else {
      console.log("Invalid Credentials");
    }

  }

  signup() {
    this.router.navigate(["signup"]);
  }

}
