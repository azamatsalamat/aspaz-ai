import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MenuInputComponent } from "./menu-input/menu-input.component";
import { MenuTableComponent } from "./menu-table/menu-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuInputComponent, MenuTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataSubmitted = false;

  onSubmitData(){
    this.dataSubmitted = true;
  }
  onHideTable(){
    this.dataSubmitted = false;
  }
}
