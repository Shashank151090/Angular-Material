import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  userData = {}
  userProfileData = {}

  addUserData(data) {
    this.userData = data;
    console.log(this.userData);
  }

  addUserProfileData(data) {
    this.userProfileData = data;
    console.log(this.userProfileData);
  }
}
