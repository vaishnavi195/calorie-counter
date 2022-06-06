import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { MENUES } from '../mock-menu';
@Component({
  selector: 'app-menu-ind',
  templateUrl: './menu-ind.component.html',
  styleUrls: ['./menu-ind.component.css'],
})
export class MenuIndComponent implements OnInit {
  @Input() menuesnew;
  @Input() Foodname;
  selectedMenu?: Menu;
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
  constructor() {}

  ngOnInit() {}
}
