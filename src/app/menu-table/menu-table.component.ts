import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu-table',
  standalone: true,
  imports: [],
  templateUrl: './menu-table.component.html',
  styleUrl: './menu-table.component.css'
})
export class MenuTableComponent {
  @Output() hideTable = new EventEmitter<void>();
  private menuService = inject(MenuService);

  get menuResults(){
    return this.menuService.menuData;
  }

  onHideTable(){
    this.hideTable.emit();
  }
}
