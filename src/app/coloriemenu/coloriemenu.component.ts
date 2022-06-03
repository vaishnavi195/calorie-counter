import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENUES, MENUESF } from '../mock-menu';
@Component({
  selector: 'app-coloriemenu',
  templateUrl: './coloriemenu.component.html',
  styleUrls: ['./coloriemenu.component.css'],
})
export class ColoriemenuComponent implements OnInit {
  menues = MENUES;
mesuesF=MENUESF
  selectedMenu?: Menu;
  onSelect(menu: Menu): void {
  
    this.selectedMenu = menu;
  }
  constructor() {}

  ngOnInit() {}
}
