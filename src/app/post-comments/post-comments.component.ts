import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-comments',
  templateUrl: './post-comments.component.html',
})
export class PostComments {
  @Input() postComments: any;
}
