import { Post } from './post.model';
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdate = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = { title, content };
    this.posts.push(post);
    this.postsUpdate.next([...this.posts]);
  }

  getPostsUpdateListener() {
    return this.postsUpdate.asObservable();
  }
}
