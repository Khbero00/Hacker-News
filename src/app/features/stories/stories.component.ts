import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { forkJoin } from "rxjs/observable/forkJoin";

import { Story } from '../../models/story';

import { StoriesService } from '../../services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  displayedColumns = ['id', 'by', 'title'];

  storyData: any;
  storyDataLength: number;

  dataSource: MatTableDataSource<Story>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    let newStories = this.storiesService.getNewStories();
    let bestStories = this.storiesService.getBestStories();

    forkJoin([newStories, bestStories]).subscribe(stories => {
      this.filteredCurrentBestStoriesMethod(stories);
    });
  }

  filteredCurrentBestStoriesMethod(stories) {
    console.log(stories);
    let filteredArray = stories[0].filter(x => {
      return stories[1].includes(x);
    });
    this.getStoryDatabyfilteredStoryids(filteredArray);
  }

  getStoryDatabyfilteredStoryids(storyIdsArray: Array<number>) {
    let storyObjData = [];
    storyIdsArray.forEach(element => {
      this.storiesService.getStory(element).subscribe(data => {
        storyObjData.push(data)
        this.dataSource = new MatTableDataSource(storyObjData);
          
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.storyDataLength = storyObjData.length;
      });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}