import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentB3Component } from './component-b3.component';

describe('ComponentB3Component', () => {
  let component: ComponentB3Component;
  let fixture: ComponentFixture<ComponentB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentB3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
