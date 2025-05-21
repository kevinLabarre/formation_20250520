import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../../../models/bank-account.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>('http://localhost:3000/bankAccounts/feufoeifuofhe/fjieojfe');
  }

  getAccounById(id: number): Observable<BankAccount> {
    return this.http.get<BankAccount>(`http://localhost:3000/bankAccounts/${id}`);
  }

  // account : le compte à mettre à jour
  updateAccount(id: number, account: BankAccount): Observable<BankAccount> {
    return this.http.put<BankAccount>(`http://localhost:3000/bankAccounts/${id}`, account)
  }

  addAccount(account: BankAccount): Observable<BankAccount> {
    return this.http.put<BankAccount>(`http://localhost:3000/bankAccounts/`, account)
  }

}
