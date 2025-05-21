import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserLogin } from '../../interface/user-login.interface';
import { UserLoginResponse } from '../../interface/user-login-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) { }

  // Injecte, comme si on l'avait fait avec le constructeur
  http = inject(HttpClient);

  baseUrl: string = 'https://movia.bcc.cd';

  login(credential: UserLogin): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(`${this.baseUrl}/auth/login`, credential);
  }

  // Il nous faudrait un endpoint côté back qui nous renverrait true ou false en fonction
  // du token
  verifToken(token: string) {
    return true;
  }


  // Alternative : Calculer s'il est encore valide par rapport à la date de fin de validation
  // de token


}
