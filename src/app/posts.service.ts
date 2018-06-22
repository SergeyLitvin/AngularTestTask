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
    return this.http.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .map((response: Response) => response.json());
  }

  getPhotos() {
    return this.http.get('http://jsonplaceholder.typicode.com/photos').map((response: Response) => response.json());
  }
}
