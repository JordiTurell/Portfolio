import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFormPageComponent } from './skill-form-page.component';

describe('SkillFormPageComponent', () => {
  let component: SkillFormPageComponent;
  let fixture: ComponentFixture<SkillFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
