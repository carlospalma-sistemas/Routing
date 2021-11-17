import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentA1Component } from './module-a/component-a1/component-a1.component';
import { ComponentA2Component } from './module-a/component-a2/component-a2.component';
import { ComponentB1Component } from './module-b/component-b1/component-b1.component';
import { ComponentB2Component } from './module-b/component-b2/component-b2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentA1Component, 
    ComponentA2Component,
    ComponentB1Component, 
    ComponentB2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
