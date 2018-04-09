import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Story } from '../models/story';

@Injectable()
export class StoriesService {

  constructor(private _http: HttpClient) { }

  getNewStories(): Observable<Story[]> {
    return this._http.get<Story[]>(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`);
  }

  getBestStories(): Observable<Story[]> {
   return this._http.get<Story[]>(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`);
  }

  getStory(storyId: number): Observable<Story[]> {
    return this._http.get<Story[]>(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
   }
}
