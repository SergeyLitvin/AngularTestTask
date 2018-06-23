import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsService } from './posts.service';
import { PostsUserComponent } from './posts-user/posts-user.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsUserComponent,
    PhotosComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
