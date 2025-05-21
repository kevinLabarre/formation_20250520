import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComputedComponent } from "../computed/computed.component";

@Component({
  selector: 'app-signal',
  imports: [FormsModule, CommonModule, ComputedComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  count: number = 0

  // Déclarer ton "signal"
  // 0, est la valeur initiale du compteur
  countSignal = signal(0)

  // La méthode set -> pour set une valeur qui prendra la place de l'ancienne
  setCount10() {
    // Sans signal (avec zone.js)
    this.count = 10;

    this.countSignal.set(10)
  }

  // méthode update
  increment() {
    // Sans signal (avec zone.js)
    this.count++
    this.countSignal.update(prevValue => prevValue + 1)
  }

  // Reset du compteur -> remettre le compteur à 0
  reset() {
    this.countSignal.set(0)
  }

  // Multiplier par le "factor"
  multiply(factor: number) {
    this.countSignal.update(prev => prev * factor)
  }

  // Exemple username et input

  username: string = ''

  userSignal = signal<{ username: string, email: string, age: number }>({
    username: "Toto",
    email: '',
    age: 0
  })

  // A REVOIR LA RECUP DE L'OBJET EVENT (value reste null)
  // updateUserSignal(value: any) {
  updateUserSignal() {
    this.userSignal.update(user => {
      return {
        ...user, username: this.username
      }
    })
  }

}
