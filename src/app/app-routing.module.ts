import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsUserComponent} from './posts-user/posts-user.component';
import {PostsComponent} from './posts/posts.component';
import {PhotosComponent} from './photos/photos.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'user', component: PostsUserComponent},
  { path: 'photos', component: PhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class  AppRoutingModule {

}
