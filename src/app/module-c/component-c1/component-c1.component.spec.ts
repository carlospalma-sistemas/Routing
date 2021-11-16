import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentC1Component } from './component-c1.component';

describe('ComponentC1Component', () => {
  let component: ComponentC1Component;
  let fixture: ComponentFixture<ComponentC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
