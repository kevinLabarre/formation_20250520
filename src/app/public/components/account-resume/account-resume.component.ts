import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { BankAccount } from '../../../models/bank-account.model';

@Component({
  selector: 'app-account-resume',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './account-resume.component.html',
  styleUrl: './account-resume.component.css'
})
export class AccountResumeComponent {

  id: number

  account?: BankAccount

  constructor(private route: ActivatedRoute, private service: AccountService) {
    this.id = this.route.snapshot.params['id']

    this.service.getAccounById(this.id).subscribe({
      next: (data) => this.account = data
    })
  }

}
