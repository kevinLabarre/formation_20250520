import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../public/services/authentification/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if (!authService.verifToken("mon token")) {
    // rediriger vers la page login
    router.navigate(["/login"])

    return false
  }

  return true;
};
