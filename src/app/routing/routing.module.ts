import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { ColoriemenuComponent } from '../coloriemenu/coloriemenu.component';
import { FormComponent } from '../form/form.component';
import { GroupComponent } from '../group/group.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: 'group', component: GroupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ColoriemenuComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [AuthGuardGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
