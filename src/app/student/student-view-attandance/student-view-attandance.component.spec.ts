import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewAttandanceComponent } from './student-view-attandance.component';

describe('StudentViewAttandanceComponent', () => {
  let component: StudentViewAttandanceComponent;
  let fixture: ComponentFixture<StudentViewAttandanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewAttandanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentViewAttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
