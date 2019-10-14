import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  userData = {}

  addUserData(data) {
    this.userData = data;
    console.log(this.userData);
  }
}
