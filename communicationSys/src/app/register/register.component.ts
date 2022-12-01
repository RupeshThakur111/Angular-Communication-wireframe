import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  users: any;
  StoragData: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      Fullname: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required]],
      ConfirmPassword: ["", [Validators.required]]
    })
  }
  save(): void {
    var usersInfo = {
      id: Number(new Date()),
      'Fullname': this.RegisterForm.value.Fullname,
      'Email': this.RegisterForm.value.Email,
      'Password': this.RegisterForm.value.Password,
      'ConfirmPassword': this.RegisterForm.value.ConfirmPassword
    }; if (usersInfo.Password == usersInfo.ConfirmPassword) {
      this.StoragData = JSON.parse(localStorage.getItem('usersStorage')!);
      this.users = this.StoragData ? this.StoragData : [];
      this.users.push(usersInfo);
      localStorage.setItem('usersStorage', JSON.stringify(this.users))
      this.router.navigate(['/register-succesful']);
    }
    else {
      alert('password and confirm password should be same');
    }

  }

}
