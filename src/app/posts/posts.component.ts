import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
})
export class Posts {
  posts: Post[];
  @Output() loadPostComments = new EventEmitter();

  constructor() {
    this.posts = [
      { id: 1, title: 'post 1', body: 'body 1', userId: 1 },
      { id: 2, title: 'post 2', body: 'body 2', userId: 2},
      { id: 3, title: 'post 3', body: 'body 3', userId: 3},
      { id: 4, title: 'post 4', body: 'body 4', userId: 4},
      { id: 5, title: 'post 5', body: 'body 5', userId: 5},
      { id: 6, title: 'post 6', body: 'body 6', userId: 6},
      { id: 7, title: 'post 7', body: 'body 7', userId: 7}
    ];
  }

  loadComments(post) {
    this.loadPostComments.emit(post);
  }
}
