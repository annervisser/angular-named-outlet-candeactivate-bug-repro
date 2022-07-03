import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Inner1Component } from './inner1/inner1.component';
import { Inner2Component } from './inner2/inner2.component';
import { OuterComponent } from './outer/outer.component';

@NgModule({
  declarations: [
    AppComponent,
    Inner1Component,
    Inner2Component,
    OuterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
