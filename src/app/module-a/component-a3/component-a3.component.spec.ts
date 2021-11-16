import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentA3Component } from './component-a3.component';

describe('ComponentA3Component', () => {
  let component: ComponentA3Component;
  let fixture: ComponentFixture<ComponentA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentA3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
