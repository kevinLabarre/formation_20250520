import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
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


}
