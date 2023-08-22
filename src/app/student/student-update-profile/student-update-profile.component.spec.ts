import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateProfileComponent } from './student-update-profile.component';

describe('StudentUpdateProfileComponent', () => {
  let component: StudentUpdateProfileComponent;
  let fixture: ComponentFixture<StudentUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
