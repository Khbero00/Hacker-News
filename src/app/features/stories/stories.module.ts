import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, 
        MatSortModule, MatFormFieldModule, MatInputModule,
        MatSidenavModule, MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderModule } from '../header/header.module';
import { StoriesComponent } from './stories.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    StoriesComponent
  ],

  exports: [
    StoriesComponent
  ],

  imports: [
      CommonModule,
      HeaderModule,
      BrowserAnimationsModule,
      MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, 
      MatInputModule, MatSidenavModule, MatToolbarModule,
  ],
})
export class StoriesModule { }