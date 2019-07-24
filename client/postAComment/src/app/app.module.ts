import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsLikesComponent } from './comments-likes/comments-likes.component';
import { AppRoutingModule } from './/app-routing.module';
//import {PostService} from "./post.service";
import {HttpClientModule} from "@angular/common/http";
import {QueryApi} from "./commonservice/request/QueryApi";
import { ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {FilterPipeModule} from "ngx-filter-pipe";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsLikesComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [/*PostService*/,QueryApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
