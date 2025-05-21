import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router)


  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      // Pour exemple
      // if (error.status === 404) {
      //   alert("ERREUR , DONNEES NON TROUVE")
      // }

      if (error.status === 401) {
        // rediriger vers la page login
        router.navigate(["/login"])
        // Supprimer le token
      }


      return throwError(() => error)
    })
  );
};
