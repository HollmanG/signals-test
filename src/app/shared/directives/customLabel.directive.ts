import { Directive, ElementRef, OnInit, computed, effect, inject, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { error } from 'console';

@Directive({
  selector: '[customLabel]',
  standalone: true,
})
export class CustomLabelDirective {
  private _htmlElement: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  public color = input.required<string>();
  public errors = input<ValidationErrors | null | undefined>(null);

  constructor() {
    effect(() => {
      this._htmlElement.nativeElement.style.color = this.color();

      if (!this.errors()) {
        this._htmlElement.nativeElement.innerText = '';

        return;
      }

      const errors = Object.keys(this.errors()!);

      if (errors.includes('required')) {
        this._htmlElement.nativeElement.innerText = 'Campo requerido';

        return;
      }

      if (errors.includes('minlength')) {
        const minLengthError = this.errors()!['minlength'];
        const minLength = minLengthError.requiredLength;
        const missingLength = minLength - minLengthError.actualLength;

        this._htmlElement.nativeElement.innerText = `Mínimo ${minLength} caracteres, faltan ${missingLength}`;

        return;
      }

      if (errors.includes('email')) {
        this._htmlElement.nativeElement.innerText = `Debe ser un correo electrónico`;

        return;
      }
    });
  }
}
