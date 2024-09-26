import { Injectable } from "@angular/core";
import { WeeklyMenu } from "./menu.model";
import { MenuInput } from "../menu-input/menu-input.model";
import { DUMMY_MENU } from "./dummy-menu";
import OpenAI from "openai";

@Injectable({providedIn: 'root'})
export class MenuService{
    menuData?: WeeklyMenu[];

    async createMenu(userInput: MenuInput){
        this.menuData = DUMMY_MENU;
        console.log(this.menuData);

        const openai = new OpenAI({
            apiKey: "",
            dangerouslyAllowBrowser: true // TODO: set to false
        });

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Which cheese should I get: parmesan or mozzarella? Give an answer in couple sentences" }],
            model: "gpt-4o-mini",
        });
        console.log(chatCompletion.choices[0].message.content);
    }
}