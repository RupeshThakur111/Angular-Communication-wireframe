import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersManagementComponent } from '../users-management/users-management.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  User: any;
  LoggedInUSer: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  save(): void {

    this.User = JSON.parse(localStorage.getItem('usersStorage')!);
    let email = this.LoginForm.value.Email;
    let password = this.LoginForm.value.Password;

    for (let i = 1; i < this.User.length; i++) {
      if (this.User[i].Email == email && this.User[i].Password == password) {
        this.LoggedInUSer = [{ id: this.User[i].id }, { Name: this.User[i].Fullname }, { Email: this.User[i].Email }];
        localStorage.removeItem('currentUser');
        localStorage.setItem('currentUser', JSON.stringify(this.LoggedInUSer));
        this.router.navigate(['/login-succesful']);
        return
      }
    }
    alert("invalid email password");
  }
}

