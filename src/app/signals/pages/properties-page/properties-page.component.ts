import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>properties-page works!</p>`,
  styleUrl: './properties-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPageComponent { }
