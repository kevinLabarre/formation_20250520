import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  // {{ value | pipe:arg1:arg2}}  -> correspond au paramètres de notre "tranform()"
  // transform(value: unknown, ...args: unknown[]): unknown { }


  transform(value: unknown): string {

    // value est la valeur qui sera récupérée sur le fichier HTML

    // Le return retourne la valeur affiché sur le navigateur
    return "Compte " + value;
  }
}
