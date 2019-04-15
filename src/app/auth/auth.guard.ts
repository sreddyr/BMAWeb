import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeServices } from '../common/services/employee.services';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: EmployeeServices) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('jwt') != null) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
