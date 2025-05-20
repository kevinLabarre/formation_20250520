import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { BankAccount } from '../../../models/bank-account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [],
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

}
