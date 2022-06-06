import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import {
  MENUES,
  Fruits,
  Vegetables,
  Breakfast,
  Lunch,
  Dinner,
  Snacks,
  Beverages,
  Sides,
  Deserts,
} from '../mock-menu';
@Component({
  selector: 'app-coloriemenu',
  templateUrl: './coloriemenu.component.html',
  styleUrls: ['./coloriemenu.component.css'],
})
export class ColoriemenuComponent implements OnInit {
  menues = MENUES;

  menunew: Menu[];
  selectedMenu?: Menu;
  status: any = true;
  Foodname: string;
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
    this.status = false;
    this.Foodname = menu.name;
    let targetId = menu.id;

    switch (targetId) {
      case 12:
        this.menunew = Fruits;
        break;
      case 13:
        this.menunew = Vegetables;
        break;
      case 14:
        this.menunew = Breakfast;
        break;
      case 15:
        this.menunew = Lunch;
        break;
      case 16:
        this.menunew = Dinner;
        break;
      case 17:
        this.menunew = Snacks;
        break;
      case 18:
        this.menunew = Beverages;
        break;
      case 19:
        this.menunew = Sides;
        break;
      case 20:
        this.menunew = Deserts;
        break;
    }
  }
  constructor() {}

  ngOnInit() {}
}
