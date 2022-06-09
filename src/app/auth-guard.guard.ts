import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable()
export class AuthGuardGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent): boolean {
    if (component.loginform.dirty) {
      return confirm('Are you want to discard changes made in this page:');
    }

    return false;
  }
}
