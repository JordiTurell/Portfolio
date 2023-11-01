import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../dashboard/service/auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router:Router){

  }

  canActivate():Observable<boolean> | boolean{
    return this.CanAccess()
  }

  canMatch():Observable<boolean> | boolean{
    return this.CanAccess()
  }

  CanAccess():Observable<boolean> | boolean {
    const token = this.authService.getToken();

    if(token != null ){
      return this.authService.isAuthenticated(token).pipe(
        tap((response) => {
          if (!response) {
            this.router.navigate(['/dashboard/login'])
          }
        }),
      )
    }else{
      this.router.navigate(['/dashboard/login'])
      return false;
    }
  }
}
