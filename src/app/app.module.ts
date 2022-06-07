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
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuIndComponent } from './menu-ind/menu-ind.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    HomeComponent,MenuDetailComponent,MenuIndComponent,LoginComponent,RegisterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
