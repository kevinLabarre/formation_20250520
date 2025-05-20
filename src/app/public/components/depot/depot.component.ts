import { Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { ActivatedRoute, Route } from '@angular/router';
import { BankAccount } from '../../../models/bank-account.model';
import { SoldeFormComponent } from "../solde-form/solde-form.component";

@Component({
  selector: 'app-depot',
  imports: [SoldeFormComponent],
  templateUrl: './depot.component.html',
  styleUrl: './depot.component.css'
})
export class DepotComponent {

  id?: number

  account?: BankAccount

  constructor(private service: AccountService, private route: ActivatedRoute) {

    this.id = this.route.parent?.snapshot.params['id']

    if (this.id) {
      console.log(this.id)
      this.service.getAccounById(this.id).subscribe({
        next: (data) => this.account = data
      })
    }
  }
}
