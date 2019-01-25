import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComments } from './post-comments/post-comments.component';
import { Posts } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    Posts,
    PostComments
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
