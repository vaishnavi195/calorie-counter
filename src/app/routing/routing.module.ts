import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { GroupComponent } from '../group/group.component';

const routes: Routes = [{ path: 'group', component: GroupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
