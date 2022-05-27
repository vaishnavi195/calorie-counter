import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FormComponent,ListComponent,FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
