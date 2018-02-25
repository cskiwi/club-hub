import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailSportTimelineComponent } from './user-detail-sport-timeline.component';

describe('UserDetailSportTimelineComponent', () => {
  let component: UserDetailSportTimelineComponent;
  let fixture: ComponentFixture<UserDetailSportTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailSportTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailSportTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
