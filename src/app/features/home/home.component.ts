import { Component, OnInit } from '@angular/core';

import { forkJoin } from "rxjs/observable/forkJoin";

import { OtherStoriesService } from '../../services/other-stories.service';
import { StoriesService } from '../../services/stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private otherStoriesService: OtherStoriesService, private storiesService: StoriesService) { }

  ngOnInit() {
    let askStories = this.otherStoriesService.getAskStories();
    let jobStories = this.otherStoriesService.getJobStories();
    let showStories = this.otherStoriesService.getShowStories();   

    forkJoin([askStories, jobStories, showStories]).subscribe(stories => {
      let finalArray = stories[0].concat(stories[1], stories[2]);
      this.otherStoryDataArray(finalArray);
    });
  }

  otherStoryDataArray(data: Array<any>) {
    let dataArray = [];
    data.forEach(element => {
      this.storiesService.getStory(element).subscribe(data => {
         dataArray.push(data);
         localStorage.setItem("otherStoriesData", JSON.stringify(dataArray));
      });
    });
  }
}