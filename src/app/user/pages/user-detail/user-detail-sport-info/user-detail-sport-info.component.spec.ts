import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailSportInfoComponent } from './user-detail-sport-info.component';

describe('UserDetailSportInfoComponent', () => {
  let component: UserDetailSportInfoComponent;
  let fixture: ComponentFixture<UserDetailSportInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailSportInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailSportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
