import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService
      .getPosts()
      .subscribe((posts: Posts[]) => {
        this.posts = posts;
      });
  }

  pagePostsUser(){
    
    //this.router.navigate([`posts?usesrId=${this.posts.userId}`])
  }

}
