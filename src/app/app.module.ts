import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

import { FilterPipe } from './filter.pipe';
import { RoutingModule } from './routing/routing.module';
import { GroupComponent } from './group/group.component';
import { ColoriemenuComponent } from './coloriemenu/coloriemenu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormComponent,
    ListComponent,
    FilterPipe,
    GroupComponent,
    ColoriemenuComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
