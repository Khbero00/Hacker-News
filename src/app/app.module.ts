import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './features/header/header.module';
import { HomeModule } from './features/home/home.module';
import { StoriesService } from './services/stories.service';
import { HttpClientModule } from '@angular/common/http';
import { StoriesModule } from './features/stories/stories.module';
import { OtherStoriesModule } from './features/other-stories/other-stories.module';
import { OtherStoriesService } from './services/other-stories.service';
import { SearchModule } from './features/search/search.module';
import { ReactiveFormService } from './services/reactive-form.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    StoriesModule,
    OtherStoriesModule,
    SearchModule,
    HttpClientModule,    
    AppRoutingModule,
  ],
  providers: [StoriesService, OtherStoriesService,ReactiveFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
