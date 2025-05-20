import { AccountType } from "../enums/account.enum";
import { Roles } from "../enums/roles.enum";
import { User } from "./user.model";


// Ce qui peut rester dans les modèles
// Méthodes utilitaires simples qui ne concernent que les données de l'objet lui-même
// Getters / setters pour les propriétés
// Transformations simples des données de l'objet
// Validation interne des données


export class BankAccount extends User {
  accountNumber: string;
  solde: number;
  lastTransactionDate: Date | null;
  private _accountType!: AccountType;

  constructor(
    id = 0,
    firstName = '',
    lastName = '',
    email = '',
    role = Roles.USER,
    accountNumber = '',
    accountType: AccountType = AccountType.Courant,
    solde = 0
  ) {
    // Appel du constructeur parent
    super(id, firstName, lastName, email, role);
    this.accountNumber = accountNumber;
    this.solde = solde;
    this.lastTransactionDate = null;

    // Passe par le setter
    this.accountType = accountType;

    // Mise à jour de la propriété sans passer par le setter
    // this._accountType = accountType;
  }

  deposit(montant: number): void {
    if (montant <= 0) {
      throw new Error('Le montant du dépôt doit être positif');
    }
    this.solde += montant;
    this.lastTransactionDate = new Date();
  }

  withdraw(montant: number): boolean {
    if (montant <= 0) {
      throw new Error('Le montant du retrait doit être positif');
    }
    if (montant > this.solde) {
      return false; // Fonds
    }
    this.solde -= montant;
    this.lastTransactionDate = new Date();
    return true;
  }

  get resume(): string {
    return `Compte ${this.accountType} n°${this.accountNumber}: ${this.fullName} - Solde: ${this.solde}€`;
  }

  set accountType(accountType: AccountType) {
    this._accountType = accountType;
  }

  get accountType(): AccountType {
    return this._accountType;
  }
}

