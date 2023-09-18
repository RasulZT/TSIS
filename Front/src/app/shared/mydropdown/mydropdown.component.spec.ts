import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydropdownComponent } from './mydropdown.component';

describe('MydropdownComponent', () => {
  let component: MydropdownComponent;
  let fixture: ComponentFixture<MydropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
