import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomLabelDirective } from '../../../shared/directives/customLabel.directive';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CustomLabelDirective],
  styleUrl: './product-page.component.css',
  templateUrl: './product-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {
  private _fb: FormBuilder = inject(FormBuilder);

  public color: string = 'green';
  public myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
  }
}
