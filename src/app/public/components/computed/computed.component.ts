import { Component, computed, Signal, signal, effect } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {

  constructor() {

    // Par défaut, vous ne pouvez créer un effect() que dans un contexte d'injection
    // (où vous avez accès à la fonction inject). La façon la plus simple est d'appeler
    //  effect dans le constructeur d'un composant, d'une directive ou d'un service :

    effect(() => {
      if (this.sum() > 100) {
        alert("attention, vous avez dépaséé 100 !")
      }
    })
  }



  table = signal([1, 2, 3, 4, 5, 6, 7, 8, 9])

  // Faisable sur un tableau , pas sur un signal
  // sum = this.table.reduce((total, value) => total + value)

  // Signal
  sum: Signal<number> = computed(() =>
    this.table().reduce((total, value) => total + value)
  )

  addNumber() {
    this.table.update(prev => [...prev, 15])
  }



}
