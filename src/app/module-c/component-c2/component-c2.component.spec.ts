import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentC2Component } from './component-c2.component';

describe('ComponentC2Component', () => {
  let component: ComponentC2Component;
  let fixture: ComponentFixture<ComponentC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
