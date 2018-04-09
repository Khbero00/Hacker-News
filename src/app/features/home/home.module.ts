import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
      HeaderModule,
  ],
})
export class HomeModule { }