import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type MenuInput } from './menu-input.model';
import { MenuService } from '../menu-table/menu.service';

@Component({
  selector: 'app-menu-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu-input.component.html',
  styleUrl: './menu-input.component.css'
})
export class MenuInputComponent {
  selectedGender?: string;
  enteredAge?: number;
  enteredWeight?: number;
  selectedGoal?: string;
  enteredPreferences?: string;

  @Output() submitData = new EventEmitter<void>();

  private menuService = inject(MenuService);

  onSubmit(){
    // if (!this.selectedGender || !this.enteredAge || !this.enteredWeight || !this.selectedGoal) {
    //   alert('Please fill in all required fields.');
    //   return;
    // }

    let data: MenuInput;
    data = {
      gender: this.selectedGender,
      age: this.enteredAge,
      weight: this.enteredWeight,
      goal: this.selectedGoal,
      preferences: this.enteredPreferences
    }

    this.menuService.createMenu(data);

    this.selectedGender = undefined;
    this.enteredAge = undefined;
    this.enteredWeight = undefined;
    this.selectedGoal = undefined;
    this.enteredPreferences = undefined;

    this.submitData.emit();
  }
}
