import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [NgFor, RouterLinkActive, RouterModule],
  template: `
    <ul class="list-group">
      @for(item of menuItems; track item.route) {
      <li class="list-group-item" [routerLink]="[item.route]" routerLinkActive="active">
        {{ item.title }}
      </li>
      }
    </ul>
  `,
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ];
}
