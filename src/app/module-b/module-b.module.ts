import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentB1Component } from './component-b1/component-b1.component';
import { ComponentB2Component } from './component-b2/component-b2.component';
import { ComponentB3Component } from './component-b3/component-b3.component';



@NgModule({
  declarations: [
    ComponentB1Component,
    ComponentB2Component,
    ComponentB3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentB1Component,
  ]
})
export class ModuleBModule { }
