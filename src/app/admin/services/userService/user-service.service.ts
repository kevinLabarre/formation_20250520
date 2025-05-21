import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl: string = "https://movia.bcc.cd/profile"

  constructor(private httpClient: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(this.baseUrl)
  }

}
