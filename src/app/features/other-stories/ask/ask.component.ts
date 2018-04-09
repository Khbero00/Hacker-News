import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Story } from '../../../models/story';

import { OtherStoriesService } from '../../../services/other-stories.service';
import { StoriesService } from '../../../services/stories.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  displayedColumns = ['id', 'by', 'title'];

  askData: any;
  askDataLength: number;

  dataSource: MatTableDataSource<Story>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private otherStoriesService: OtherStoriesService, private storyService: StoriesService) { }

  ngOnInit() {
    this.otherStoriesService.getAskStories().subscribe(ask => this.getAskStoriesByIds(ask), error => {
      console.log("Error!");
    });
  }

  getAskStoriesByIds(askData) {
    let askStoryObjData = [];
    askData.forEach(element => {
      this.storyService.getStory(element).subscribe(data => {
        askStoryObjData.push(data);

        this.dataSource = new MatTableDataSource(askStoryObjData);
          
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.askDataLength = askStoryObjData.length;
      })
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
