import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, 
         MatInputModule, MatSidenavModule, MatToolbarModule, MatTabsModule } from '@angular/material';

import { HeaderModule } from '../header/header.module';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
   SearchComponent
  ],

  exports: [
    SearchComponent,
    ReactiveFormsModule,
  ],

  imports: [
    CommonModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, 
    MatInputModule, MatSidenavModule, MatToolbarModule, MatTabsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SearchModule { }