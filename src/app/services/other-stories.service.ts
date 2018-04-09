import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { forkJoin } from "rxjs/observable/forkJoin";

import { Story } from '../models/story';

@Injectable()
export class OtherStoriesService {

  constructor(private _http: HttpClient) { }

  getAskStories(): Observable<Story[]> {
    return this._http.get<Story[]>(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`);
  }

  getJobStories(): Observable<Story[]> {
   return this._http.get<Story[]>(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`);
  }

  getShowStories(): Observable<Story[]> {
    return this._http.get<Story[]>(`https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty`);
   }

  getAllStories(askStories, jobStories, showStories) {
   return forkJoin([askStories, jobStories, showStories]);
  }

}
