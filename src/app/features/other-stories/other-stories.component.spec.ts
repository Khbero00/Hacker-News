import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStoriesComponent } from './other-stories.component';

describe('OtherStoriesComponent', () => {
  let component: OtherStoriesComponent;
  let fixture: ComponentFixture<OtherStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
