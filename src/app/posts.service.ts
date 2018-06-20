import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostsService {
  constructor(private http: Http) {}

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/')
      .map((response: Response) => response.json());
  }

  getUser() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/')
      .map((response: Response) => response.json());
  }
}
