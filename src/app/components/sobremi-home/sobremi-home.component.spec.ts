import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiHomeComponent } from './sobremi-home.component';

describe('SobremiHomeComponent', () => {
  let component: SobremiHomeComponent;
  let fixture: ComponentFixture<SobremiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
