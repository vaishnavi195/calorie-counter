import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENUES, MENUESF } from '../mock-menu';
@Component({
  selector: 'app-menu-ind',
  templateUrl: './menu-ind.component.html',
  styleUrls: ['./menu-ind.component.css']
})
export class MenuIndComponent implements OnInit {
  menues = MENUESF;

  selectedMenu?: Menu;
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
  constructor() {}

  ngOnInit() {}
  }

