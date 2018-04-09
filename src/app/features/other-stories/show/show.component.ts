import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OtherStoriesService } from '../../../services/other-stories.service';
import { StoriesService } from '../../../services/stories.service';
import { Story } from '../../../models/story';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  displayedColumns = ['id', 'by', 'title'];

  showData: any;
  showDataLength: number;

  dataSource: MatTableDataSource<Story>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private otherStoriesService: OtherStoriesService, private storyService: StoriesService) { }

  ngOnInit() {
    this.otherStoriesService.getShowStories().subscribe(show => this.getshowStoriesByIds(show), error => {
      console.log("Error!");
    });
  }

  getshowStoriesByIds(showData) {
    let showStoryObjData = [];
    showData.forEach(element => {
      this.storyService.getStory(element).subscribe(data => {
        showStoryObjData.push(data);

        this.dataSource = new MatTableDataSource(showStoryObjData);
          
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.showDataLength = showStoryObjData.length;
      })
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
