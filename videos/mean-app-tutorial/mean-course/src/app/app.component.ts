import { Component } from '@angular/core';
import { Post } from './posts/post.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostCreated(post) {
    this.storedPosts.push(post);
  }
}
