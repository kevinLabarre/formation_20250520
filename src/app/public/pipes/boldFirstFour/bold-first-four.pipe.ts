import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'boldFirstFour'
})
export class BoldFirstFourPipe implements PipeTransform {

  constructor(private sanitazer: DomSanitizer) { }

  transform(value: string): SafeHtml {

    if (!value) {
      return '';
    }

    // Si le texte a 4 carctères ou moins, on met tout en gras
    if (value.length <= 4) {
      return this.sanitazer.bypassSecurityTrustHtml(`<strong>${value}</strong>`)
    }

    // Sinon on met en gras les 4 premiers caractères

    // Récupère les 4 premiers carctères
    const FIRST_FOUR = value.substring(0, 4)

    // Récupère le reste
    const REST = value.substring(4)

    return this.sanitazer.bypassSecurityTrustHtml(`<strong>${FIRST_FOUR}</strong>${REST}`);
  }

}
