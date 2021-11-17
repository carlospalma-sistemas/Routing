import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentA1Component } from './module-a/component-a1/component-a1.component';
import { ComponentA2Component } from './module-a/component-a2/component-a2.component';

const routes: Routes = [
  { path:"", redirectTo:"ruta1", pathMatch:"full" },
  { path:"ruta1", component:ComponentA1Component },
  { path:"ruta2", component:ComponentA2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
