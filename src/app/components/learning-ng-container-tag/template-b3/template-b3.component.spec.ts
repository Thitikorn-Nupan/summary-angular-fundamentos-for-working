import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateB3Component } from './template-b3.component';

describe('TemplateB3Component', () => {
  let component: TemplateB3Component;
  let fixture: ComponentFixture<TemplateB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateB3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
