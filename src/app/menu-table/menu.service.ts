import { Injectable } from "@angular/core";
import { WeeklyMenu } from "./menu.model";
import { MenuInput } from "../menu-input/menu-input.model";
import { DUMMY_MENU } from "./dummy-menu";

@Injectable({providedIn: 'root'})
export class MenuService{
    menuData?: WeeklyMenu[];

    createMenu(userInput: MenuInput){
        this.menuData = DUMMY_MENU;
        console.log(this.menuData);
    }
}