import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo-children',
  imports: [],
  templateUrl: './on-changes-demo-children.component.html',
  styleUrl: './on-changes-demo-children.component.css'
})
export class OnCHangesDemoChildrenComponent implements OnChanges {

  @Input() number?: number

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['number']) {
      console.log("Ma valeur a changée !")

      // Accéder à la nouvelle valeur
      console.log(changes['number'].currentValue)

      alert("ma valeur a changée ! " + changes['number'].currentValue)
    }
  }


}
