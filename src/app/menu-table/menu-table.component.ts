import { Component, inject } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu-table',
  standalone: true,
  imports: [],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.css'
})
export class MenuTableComponent {
  private menuService = inject(MenuService);
  get menuResults(){
    return this.menuService.menuData;
  }
}
