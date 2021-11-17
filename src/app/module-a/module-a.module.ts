import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentA1Component } from './component-a1/component-a1.component';  //<=
import { ComponentA2Component } from './component-a2/component-a2.component';  //<=
import { ComponentA3Component } from './component-a3/component-a3.component';  //<=



@NgModule({
  declarations: [
    ComponentA1Component,   //<=
    ComponentA2Component,   //<=
    ComponentA3Component    //<=
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleAModule { }
