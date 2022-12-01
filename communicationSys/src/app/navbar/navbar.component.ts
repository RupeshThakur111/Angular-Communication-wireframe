import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  curentUSer: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logOutCall(): void {
    localStorage.removeItem('currentUser');
  }
  CheckIfLoggedIn(): void {
    this.curentUSer = JSON.parse(localStorage.getItem('currentUser')!);
    if (this.curentUSer == null) {
      this.router.navigate(['/welcome']);
    }
  }
}
