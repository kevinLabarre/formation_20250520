import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enfant1',

  // FormsModule --> Pour utiliser 'ngModel'

  imports: [FormsModule],
  templateUrl: './enfant1.component.html',
  styleUrl: './enfant1.component.css'
})
export class Enfant1Component {

  name: string = '';

  // (ngModelChange) est appelé à chaque fois qu'un caractère est ajouté / supprimé par l"utilisateur
  handleChange() {
    console.log("name ->", this.name)
    // console.log("event ->",e)
  }


  save() {
    console.log(this.name + " enregistré")
  }

}
