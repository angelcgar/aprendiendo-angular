import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === AuthStatus.authenticated) {
    console.log('hola mundo');
    return true;
  }

  if (authService.authStatus() === AuthStatus.checking) {
    return false;
  }

  // const URL = state.url
  // localStorage.setItem('url', URL)
  router.navigateByUrl('/auth/login');
  return false;
};
