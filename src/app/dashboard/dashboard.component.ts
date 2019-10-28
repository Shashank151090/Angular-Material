import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Number of cards to be generated with column and rows to be covered  
  cards = [  
    { title: 'Card 1', cols: 1, rows: 2 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 1 },  
    { title: 'Card 4', cols: 2, rows: 1 }  
  ];  
  userData: any;
  getData: any;

  username: string;
  defaultImgUrl: string = '../../assets/images/defaultUser.jpeg'
  constructor(private dataTransfer: DataTransferService, private apiService: ApiService) { }

  ngOnInit() {
    this.userData = this.dataTransfer.userData;
    this.getData = this.apiService.getDataFromRest().subscribe((data) => {
      console.log(data);
    })
  }

}
