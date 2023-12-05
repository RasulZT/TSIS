import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdCourseComponent } from './upd-course.component';

describe('UpdCourseComponent', () => {
  let component: UpdCourseComponent;
  let fixture: ComponentFixture<UpdCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
