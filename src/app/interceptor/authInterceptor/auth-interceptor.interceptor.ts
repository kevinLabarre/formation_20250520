import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../public/services/authentification/auth.service';
import { isPlatformBrowser } from '@angular/common';



// req est la requête qu'on intercepte
// next est la requête suivante _ (on utilise next pour lancer l'ation suivant)
export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  let token: string | null = null

  const platformId = inject(PLATFORM_ID)
  const isBrowser = isPlatformBrowser(platformId)


  if (isBrowser) {
    token = localStorage.getItem("accountApp-token")
  }

  // Si je n'ai pas de token, je ne modifie pas la requête _ on ne fait aucune action
  if (!token) {
    return next(req)
  }

  const authToken = `Bearer ${token}`;

  const CLONE = req.clone({
    headers: req.headers.set('Authorization', authToken)
  })

  console.log('Headers envoyés:', CLONE.headers.get('Authorization'));

  return next(CLONE);
};
