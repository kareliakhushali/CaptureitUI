import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherUpdateComponent } from './admin-teacher-update.component';

describe('AdminTeacherUpdateComponent', () => {
  let component: AdminTeacherUpdateComponent;
  let fixture: ComponentFixture<AdminTeacherUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeacherUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTeacherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
