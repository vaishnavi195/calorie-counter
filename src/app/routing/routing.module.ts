import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoriemenuComponent } from '../coloriemenu/coloriemenu.component';
import { FormComponent } from '../form/form.component';
import { GroupComponent } from '../group/group.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'group', component: GroupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ColoriemenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
