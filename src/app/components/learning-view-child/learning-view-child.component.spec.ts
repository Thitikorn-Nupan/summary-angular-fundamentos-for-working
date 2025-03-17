import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningViewChildComponent } from './learning-view-child.component';

describe('LearningViewChildComponent', () => {
  let component: LearningViewChildComponent;
  let fixture: ComponentFixture<LearningViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
