import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewAttandanceComponent } from './teacher-view-attandance.component';

describe('TeacherViewAttandanceComponent', () => {
  let component: TeacherViewAttandanceComponent;
  let fixture: ComponentFixture<TeacherViewAttandanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewAttandanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewAttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
