import { Post, Response } from './../entities/interfaces';
import { RedditApiService } from './../services/redditapi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Server } from 'selenium-webdriver/safari';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  title: string;
  description: string;
  path: string;

  enabled = true;

  constructor(private redditApi: RedditApiService, private router: Router) { }

  ngOnInit() {
    this.redditApi.loggedOut.subscribe(() => {
      this.router.navigate(['/r/dev']);
    });
    if (!this.redditApi.isLoggedIn()) {
      this.router.navigate(['/r/dev']);
    }
  }

  fileChanged(e: Event) {
    const file = (e.target as HTMLInputElement).files[0];
    
    if (!file)
      return;

    this.enabled = false;

    this.redditApi.upload(file).subscribe((res: any) => {
      console.log(event);
      this.path = res.data.path;
      this.enabled = true;
    });  
  }

  upload() {
    const post = {
      title: this.title.trim(),
      description: this.description.trim(),
      path: this.path
    };
    this.redditApi.createPost(post).subscribe((res) => {
      this.router.navigate(['/r/dev']);
    });
  }

}