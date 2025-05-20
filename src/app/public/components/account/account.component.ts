import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { BankAccount } from '../../../models/bank-account.model';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe } from '@angular/common';
import { AuthorPipe } from '../../pipes/author/author.pipe';

@Component({
  selector: 'app-account',
  imports: [DatePipe, AuthorPipe, CurrencyPipe, JsonPipe, LowerCasePipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  accounts: BankAccount[] = [];

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (data) => this.accounts = data
    });
  }

  goToDetail(id: number) {
    this.router.navigate(["detail-compte/", id])
  }


  // Mettre en minuscule le type de compte
  // Utiliser le pipe 'currency' pour afficher nos solde en $dollar


}
