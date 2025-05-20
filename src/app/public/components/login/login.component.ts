import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup

  errorMessages = {
    email: [
      { type: 'required', message: 'Le champ email est obligatoire' },
      { type: 'email', message: 'Email non valide' }
    ],
    password: [
      { type: 'required', message: 'Le champ mot de passe est obligatoire' },
      { type: 'minLength', message: 'Mot de passe doit faire plus de 8 caractères' }
    ]
  }


  constructor(private fb: FormBuilder) {
    this.initForm()

    // méthode pour pré-remplir
    // this.loginForm.setValue({
    //   email: "B9b3A@example.com",
    //   password: "12345678"
    // })
  }


  initForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8) // Mon mdp devra faire + de 8 caractères
        ]
      })
    })
  }

  onSubmit(): void {
    console.log("Submit")
    // Tous les champs sont OK, en fonction des validators
    if (this.loginForm.valid) {
      // Pour récupérer une valeur d'un chmap spécifique
      console.log(this.loginForm.value.email)
      console.log(this.loginForm.value)
    }
  }

  get formControl() {
    return this.loginForm.controls
  }


}
