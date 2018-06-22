import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  id: number;
  listPhotos: Photos[] = [];

  constructor(private photoService: PostsService, public route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService
      .getPhotos()
      .subscribe((photos: Photos[]) => {
        this.listPhotos = photos;
      });
  }

}
