import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class Posts implements OnInit {
  posts: any;
  @Output() loadPostComments = new EventEmitter();

  constructor(private http: HttpClient) {
    this.posts = [];
    this.http = http;
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (response) => {
          console.log(response);
          this.posts = response;
        },
        (err) => {
          console.error(err);
        }
      )
  }

  loadComments(post) {
    this.loadPostComments.emit(post);
  }
}
