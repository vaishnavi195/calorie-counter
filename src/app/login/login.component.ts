import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero, login } from '../hero';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('heroForm') public loginform:NgForm
  emailID: any = '';
  password: any = '';

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  model = new login('', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new login('', '');
  }
  constructor() {}

  ngOnInit() {}
}
