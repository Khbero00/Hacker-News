import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Story } from '../../../models/story';
import { OtherStoriesService } from '../../../services/other-stories.service';
import { StoriesService } from '../../../services/stories.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  
  displayedColumns = ['id', 'by', 'title'];

  jobData: any;
  jobDataLength: number;

  dataSource: MatTableDataSource<Story>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private otherStoriesService: OtherStoriesService, private storyService: StoriesService) { }

  ngOnInit() {
    this.otherStoriesService.getJobStories().subscribe(job => this.getAJobStoriesByIds(job), error => {
      console.log("Error!");
    });
  }

  getAJobStoriesByIds(jobData) {
    let jobStoryObjData = [];
    jobData.forEach(element => {
      this.storyService.getStory(element).subscribe(data => {
        jobStoryObjData.push(data);

        this.dataSource = new MatTableDataSource(jobStoryObjData);
          
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.jobDataLength = jobStoryObjData.length;
      })
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
