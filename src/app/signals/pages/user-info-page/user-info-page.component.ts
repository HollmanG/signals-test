import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>user-info-page works!</p>`,
  styleUrl: './user-info-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoPageComponent { }
