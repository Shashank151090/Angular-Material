import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Route, Router } from '@angular/router';
=======
import { Router } from '@angular/router';
>>>>>>> 82b210e8ec1d2317c46f55be74d2630549935006

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
empId: String;
  constructor(private router: Router) {
    this.empId = JSON.parse(localStorage.getItem('saveEmpId'));

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
   }
>>>>>>> 82b210e8ec1d2317c46f55be74d2630549935006

  ngOnInit() {
  }

<<<<<<< HEAD
  logout() {
    this.router.navigate([""]);
=======
  pickRide() {
    this.router.navigate(["pickRide"])
  }

  addNewRide() {
    this.router.navigate(["addNewRide"]);
>>>>>>> 82b210e8ec1d2317c46f55be74d2630549935006
  }
}
