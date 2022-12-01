import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-succesful',
  templateUrl: './login-succesful.component.html',
  styleUrls: ['./login-succesful.component.scss']
})
export class LoginSuccesfulComponent implements OnInit {
  CurrentUser: any;
  UserName: any;
  curentUSer2:any;
  constructor(private router:Router) { }

  ngOnInit(): void {

    this.curentUSer2 = JSON.parse(localStorage.getItem('currentUser')!);
    if (this.curentUSer2 == null) {
      this.router.navigate(['/welcome']);
    }
    this.CurrentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.UserName = JSON.stringify(this.CurrentUser[2].Email);
    this.UserName = this.UserName.slice(1, -1)
  }

}
