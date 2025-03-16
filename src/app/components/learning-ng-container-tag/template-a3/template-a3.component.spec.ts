import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateA3Component } from './template-a3.component';

describe('TemplateA3Component', () => {
  let component: TemplateA3Component;
  let fixture: ComponentFixture<TemplateA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateA3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
