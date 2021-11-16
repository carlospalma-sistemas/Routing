import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleAModule } from './module-a/module-a.module';
//import { ComponentA1Component } from './module-a/component-a1/component-a1.component';
//import { ComponentA2Component } from './module-a/component-a2/component-a2.component';
//import { ComponentA3Component } from './module-a/component-a3/component-a3.component';

@NgModule({
  declarations: [
    AppComponent//,
    //ComponentA1Component, 
    //ComponentA2Component
    //ComponentA3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
