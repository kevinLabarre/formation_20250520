import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authentification/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup

  errorMessages = {
    UserName: [
      { type: 'required', message: 'Le champ email est obligatoire' },
      // { type: 'UserName', message: 'Email non valide' }
    ],
    Password: [
      { type: 'required', message: 'Le champ mot de passe est obligatoire' },
      { type: 'minLength', message: 'Mot de passe doit faire plus de 8 caractères' }
    ]
  }


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.initForm()

    // méthode pour pré-remplir
    // this.loginForm.setValue({
    //   email: "B9b3A@example.com",
    //   password: "12345678"
    // })
  }


  initForm(): void {
    this.loginForm = this.fb.group({
      UserName: new FormControl('', {
        validators: [
          Validators.required,
          // Validators.email
        ]
      }),
      Password: new FormControl('', {
        validators: [
          Validators.required,
          //Validators.minLength(8) // Mon mdp devra faire + de 8 caractères
        ]
      })
    })
  }

  onSubmit(): void {

    // Tous les champs sont OK, en fonction des validators
    if (this.loginForm.valid) {

      // Pour récupérer une valeur d'un chmap spécifique
      console.log(this.loginForm.value.UserName)
      console.log(this.loginForm.value)

      this.authService.login(this.loginForm.value).subscribe({
        next: res => {
          console.log("res ->", res)
          localStorage.setItem("accountApp-token", res.token.access_token)
          this.router.navigate(["/admin"])
        },

      })

    }
  }

  get formControl() {
    return this.loginForm.controls
  }


}
