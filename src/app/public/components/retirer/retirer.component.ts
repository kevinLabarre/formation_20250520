import { Component } from '@angular/core';
import { BankAccount } from '../../../models/bank-account.model';
import { AccountService } from '../../services/account/account.service';
import { ActivatedRoute } from '@angular/router';
import { SoldeFormComponent } from "../solde-form/solde-form.component";

@Component({
  selector: 'app-retirer',
  imports: [SoldeFormComponent],
  templateUrl: './retirer.component.html',
  styleUrl: './retirer.component.css'
})
export class RetirerComponent {
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
