import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, 
         MatInputModule, MatSidenavModule, MatToolbarModule, MatTabsModule } from '@angular/material';

import { HeaderModule } from '../header/header.module';

import { OtherStoriesComponent } from './other-stories.component';
import { AskComponent } from './ask/ask.component';
import { JobComponent } from './job/job.component';
import { ShowComponent } from './show/show.component';




@NgModule({
  declarations: [
    OtherStoriesComponent,
    AskComponent,
    JobComponent,
    ShowComponent,
  ],

  exports: [
    OtherStoriesComponent,
    AskComponent,
    JobComponent,
    ShowComponent,
  ],

  imports: [
    CommonModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, 
    MatInputModule, MatSidenavModule, MatToolbarModule, MatTabsModule
  ],
})
export class OtherStoriesModule { }