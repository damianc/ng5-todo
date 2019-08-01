import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterFilter } from '@filter/Filter';
import { PriorityComponent } from './priority.component';

@NgModule({
  declarations: [
    AppComponent, FilterFilter, PriorityComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
