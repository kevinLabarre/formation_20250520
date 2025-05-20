import { Component, Input, Output } from '@angular/core';
import { BankAccount } from '../../../models/bank-account.model';
import { AccountService } from '../../services/account/account.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solde-form',
  imports: [FormsModule],
  templateUrl: './solde-form.component.html',
  styleUrl: './solde-form.component.css'
})
export class SoldeFormComponent {

  @Input() account?: BankAccount
  @Input() operation?: "deposit" | "withdraw"

  valueSoldeInput: number = 0

  constructor(private service: AccountService) {
  }

  handleSubmit() {
    if (this.account) {
      if (typeof Number(this.valueSoldeInput) === "number") {
        if (this.operation === "deposit") {
          this.account.solde += this.valueSoldeInput
        }
        if (this.operation === "withdraw") {
          console.log(this.operation)
          this.account.solde -= this.valueSoldeInput
        }
        this.service.updateAccount(this.account.id!, this.account).subscribe({
          next: (data) => console.log(data),
          error: (err) => console.log(err)
        })
      }

    }
    this.valueSoldeInput = 0

  }
}
