import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSobremiComponent } from './forms-sobremi.component';

describe('FormsSobremiComponent', () => {
  let component: FormsSobremiComponent;
  let fixture: ComponentFixture<FormsSobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsSobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
