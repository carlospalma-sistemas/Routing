import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentC1Component } from './component-c1/component-c1.component';
import { ComponentC2Component } from './component-c2/component-c2.component';
import { ComponentC3Component } from './component-c3/component-c3.component';



@NgModule({
  declarations: [
    ComponentC1Component,
    ComponentC2Component,
    ComponentC3Component
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleCModule { }
