import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { BankAccount } from '../../../models/bank-account.model';
import { Router } from '@angular/router';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe } from '@angular/common';
import { AuthorPipe } from '../../pipes/author/author.pipe';
import { BoldFirstFourPipe } from '../../pipes/boldFirstFour/bold-first-four.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  imports: [DatePipe, AuthorPipe, CurrencyPipe, JsonPipe, LowerCasePipe, BoldFirstFourPipe, AsyncPipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  accounts: BankAccount[] = [];

  accountsForPipeAsync$: Observable<BankAccount[]>

  constructor(private accountService: AccountService, private router: Router) {
    this.accountsForPipeAsync$ = this.accountService.getAccounts();
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (data) => this.accounts = data
    });
  }

  goToDetail(id: number) {
    this.router.navigate(["detail-compte/", id])
  }


}
