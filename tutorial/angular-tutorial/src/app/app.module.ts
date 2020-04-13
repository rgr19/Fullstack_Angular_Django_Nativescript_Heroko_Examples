import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponentFirstComponent } from './app-component-first/app-component-first.component';
import { AppComponentSecondComponent } from './app-component-second/app-component-second.component';
import { IntroComponent } from './intro/intro.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AppComponentFirstComponent,
    AppComponentSecondComponent,
    IntroComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
