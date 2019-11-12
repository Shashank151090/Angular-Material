import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';
import { ApiService } from '../api.service';
import { MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  userData: any;
  getData: any;
  arrayToDisplay: any = [];
  userImagePath = "../../assets/images/userImg/user-"
  username: string;
  defaultImgUrl: string = '../../assets/images/defaultUser.jpeg'
  constructor(private dataTransfer: DataTransferService, private apiService: ApiService, private router: Router) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.userData = this.dataTransfer.userData;
    this.getData = this.apiService.getDataFromRest().subscribe((data) => {
      this.arrayToDisplay = data;
      for(let i=0; i<this.arrayToDisplay.length; i++) {
        this.arrayToDisplay[i].imageUrl = this.userImagePath + this.arrayToDisplay[i].id + '.jpg';
      }
      console.log(this.arrayToDisplay)
      this.arrayToDisplay.paginator = this.paginator;
    })
  }
  
  getUserDetails(data) {
    this.dataTransfer.addUserProfileData(data);
    this.router.navigate(["profile"]);
  }


}
