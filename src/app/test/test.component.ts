import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private api: ApiService) { }


  posts: any;
  title: string;

  ngOnInit() {
    this.posts = this.api.getUserPosts().subscribe((dataposts) => {
      console.log(dataposts);
      this.title = this.posts.title;
    })

    

  }

}
