import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
      .map((response: Response) => response.json());
  }

  getUserPosts(userId) {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1')
      .map((response: Response) => response.json());
  }
}
