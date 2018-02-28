import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFormGeneralComponent } from './club-form-general.component';

describe('ClubFormGeneralComponent', () => {
  let component: ClubFormGeneralComponent;
  let fixture: ComponentFixture<ClubFormGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubFormGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubFormGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
