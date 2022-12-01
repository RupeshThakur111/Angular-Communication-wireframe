import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {
  text: any;
  StorageData: any;
  TextDataFromStorage: any;
  date = Date()
  chatForm!: FormGroup;
  curentUSer2:any;
  CurrentUser: any;
  UserName: any;
  users:any;
  curentUSer: any;
  id:any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.curentUSer2 = JSON.parse(localStorage.getItem('currentUser')!);
    if (this.curentUSer2 == null) {
      this.router.navigate(['/welcome']);
    }
    this.CurrentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.users=JSON.parse(localStorage.getItem('usersStorage')!);
    for(let i=0 ; i<this.users.length ; i++)
    {
      if(this.users[i].id==this.CurrentUser[0].id)
      {
        this.UserName =this.users[i].Fullname;
        this.id=this.CurrentUser[0].id
      }
    }
    this.TextDataFromStorage = JSON.parse(localStorage.getItem('ChatStorage')!);
    this.chatForm = this.fb.group({
      chatbox: ["", [Validators.required]]
    });
  }
  save(): void {
    var chatInfo = {
      id: this.id,
      text: this.chatForm.value.chatbox,
      userName: this.UserName
    };
    this.StorageData = JSON.parse(localStorage.getItem("ChatStorage")!);
    this.text = this.StorageData ? this.StorageData : [];
    this.text.push(chatInfo);
    localStorage.setItem("ChatStorage", JSON.stringify(this.text))
    this.TextDataFromStorage = JSON.parse(localStorage.getItem('ChatStorage')!);
    this.chatForm.reset()
  }

  refresh():void{
    this.chatForm.reset();
  }
}
