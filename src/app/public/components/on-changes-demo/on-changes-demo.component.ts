import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OnCHangesDemoChildrenComponent } from "../on-changes-demo-children/on-changes-demo-children.component";

@Component({
  selector: 'app-on-changes-demo',
  imports: [OnCHangesDemoChildrenComponent],
  templateUrl: './on-changes-demo.component.html',
  styleUrl: './on-changes-demo.component.css'
})
export class OnCHangesDemoComponent {

  number: number = 0

  onClick() {
    this.number++
  }


}
