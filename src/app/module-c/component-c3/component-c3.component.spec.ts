import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentC3Component } from './component-c3.component';

describe('ComponentC3Component', () => {
  let component: ComponentC3Component;
  let fixture: ComponentFixture<ComponentC3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentC3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
