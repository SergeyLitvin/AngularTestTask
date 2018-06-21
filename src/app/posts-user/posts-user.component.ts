import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PostsService } from '../posts.service';


interface UserPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.css']
})
export class PostsUserComponent implements OnInit {
  userId: string;
  userPosts: UserPosts[] = [];

  constructor(private postsService: PostsService, private route: ActivatedRoute) {}


  ngOnInit() {

  }


}
