import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Counter {{ total() }}</h1>
    <hr />
    <h2>Square counter {{ squareTotal() }}</h2>
    <hr />

    <button (click)="add()" class="btn btn-primary">+1</button>
    &nbsp;
    <button (click)="substract()" class="btn btn-primary">-1</button>
    &nbsp;
    <button (click)="reset()" class="btn btn-secondary">Reset</button>
  `,
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  public total = signal<number>(0);
  public squareTotal = computed(() => this.total() ** 2);

  add() {
    this.total.update((cur) => cur + 1);
  }

  substract() {
    this.total.update((cur) => cur - 1);
  }

  reset() {
    this.total.set(0);
  }
}
