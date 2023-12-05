import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdTeacherComponent } from './upd-teacher.component';

describe('UpdTeacherComponent', () => {
  let component: UpdTeacherComponent;
  let fixture: ComponentFixture<UpdTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
