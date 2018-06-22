import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private postsService: PostsService, public route: ActivatedRoute) {
    this.userId = this.route.snapshot.params['userId'];
  }


  ngOnInit() {
    this.loadUserPosts(this.userId);
  }

  loadUserPosts(userId) {
    this.postsService
      .getUserPosts(userId)
      .subscribe((userPosts: UserPosts[]) => {
        this.userPosts = userPosts;
      });
  }

}
