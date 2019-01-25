import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postComments: any;

  constructor(private http: HttpClient) {
    this.postComments = [];
    this.http = http;
  }

  onLoadPostComments(post) {
    console.log(post);

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .subscribe(
        (postComments) => {
          console.log(postComments);
          this.postComments = postComments;
        },
        (err) => {
          console.error(err);
        }
      )
  }
}
