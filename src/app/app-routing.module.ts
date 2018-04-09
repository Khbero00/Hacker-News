
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './features/home/home.component';
import { StoriesComponent } from './features/stories/stories.component';
import { OtherStoriesComponent } from './features/other-stories/other-stories.component';
import { SearchComponent } from './features/search/search.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'home', component: HomeComponent  },
    { path: 'stories', component: StoriesComponent  },
    { path: 'other-stories', component: OtherStoriesComponent  },
    { path: 'search', component: SearchComponent  },
]

@NgModule({    
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule,
  ]
})
export class AppRoutingModule { }
