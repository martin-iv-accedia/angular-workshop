import { Component } from '@angular/core';
import { PostComment } from './models/post-comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postComments: PostComment[];

  constructor() {
    this.postComments = [];
  }

  onLoadPostComments(post) {
    console.log(post);
    this.postComments = [
      { id: 1, postId: 1, name: 'comment 1', body: 'comment 1 body', email: 'user 1' },
      { id: 2, postId: 2, name: 'comment 2', body: 'comment 2 body', email: 'user 2' },
      { id: 3, postId: 3, name: 'comment 3', body: 'comment 3 body', email: 'user 3' },
      { id: 4, postId: 4, name: 'comment 4', body: 'comment 4 body', email: 'user 4' },
      { id: 5, postId: 5, name: 'comment 5', body: 'comment 5 body', email: 'user 5' }
    ];
  }
}
