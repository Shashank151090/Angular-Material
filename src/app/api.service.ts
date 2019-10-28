import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getDataFromRest() {
   return this.http.get(this.baseUrl+'users');
  }

  getUserPosts() {
    return this.http.get(this.baseUrl+'posts/1');
  }
}
