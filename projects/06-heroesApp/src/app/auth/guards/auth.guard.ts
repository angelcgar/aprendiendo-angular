import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  GuardResult,
  MaybeAsync,
  Route,
  UrlSegment,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): MaybeAsync<GuardResult> {
    return this.authService.checkAuthentication().pipe(
      tap((isAuthenticated) => console.log('isAuthenticated', isAuthenticated)),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    // console.log('primer can match');
    // console.log(route, segments);
    return this.checkAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    // console.log('can activated');
    // console.log(route, state);
    return this.checkAuthStatus();
  }
}
