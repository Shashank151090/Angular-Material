import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData = {}

  constructor(private dataTransfer: DataTransferService) { }

  ngOnInit() {
    this.userData = this.dataTransfer.userProfileData;
  }

}
