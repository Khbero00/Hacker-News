import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { forkJoin } from "rxjs/observable/forkJoin";
import { Subscription } from 'rxjs/Subscription';

import { ReactiveFormService } from '../../services/reactive-form.service';
import { OtherStoriesService } from '../../services/other-stories.service';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../models/story';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private term: string = "";
  
  searchResults = [];
  isDataFound: boolean;

  searchForm: FormGroup;
  searchControls = {
    search: new FormControl(null, Validators.required),
  }

  routeSubscription: Subscription;

  constructor(private reactiveFormsService: ReactiveFormService, 
              private router: Router, private activatedRoute: ActivatedRoute, 
              private otherStoriesService: OtherStoriesService, private storiesService: StoriesService) { }

  ngOnInit() {
    this.searchForm = this.reactiveFormsService.toFormGroup(this.searchControls);
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      if (params && params['term']) {
          this.onSearch(params['term']);
      }
    });
  }
  doSearch() {
    this.router.navigate(['search', {term: this.searchForm.value.search}]);
  }

  onSearch(searchParams: any) {
    this.searchResults = [];
    
    let storyData = JSON.parse(localStorage.getItem("otherStoriesData"));
    for (let data of storyData) {
      if (data.id.toString() === searchParams || data.by === searchParams || data.title === searchParams) {
        this.searchResults.push(data);
      } else { continue;}
    }
    this.searchResults.length > 0 ? this.isDataFound = true: this.isDataFound = false;
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
