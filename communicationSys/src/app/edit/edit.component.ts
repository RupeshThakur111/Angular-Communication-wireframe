import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  curentUSer2:any;
  curentUSer3:any;
  EditForm!: FormGroup;
  users = JSON.parse(localStorage.getItem('usersStorage')!)
  LoginUser = JSON.parse(localStorage.getItem('currentUser')!)
  editId:any;
  datafromChatStorage:any;
  urlid:any

  constructor(private fb: FormBuilder, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.curentUSer2 = JSON.parse(localStorage.getItem('currentUser')!);
    if (this.curentUSer2 == null) {
      this.router.navigate(['/welcome']);
    }
    const editUserUrl = Number(this.route.snapshot.paramMap.get('id'));
    this.editId=this.getuserinputbyid(editUserUrl);
    this.urlid=editUserUrl;

    //form declaration
    this.EditForm = this.fb.group({
      Fullname: [this.editId.Fullname, [Validators.required]],
      Email: [this.editId.Email, [Validators.required,Validators.email
      ]]
    })
    this.datafromChatStorage=JSON.parse(localStorage.getItem('ChatStorage')!);
  }
  getuserinputbyid(id:number):any[]{
    let usersss=JSON.parse(localStorage.getItem('usersStorage')!);
    for (let i = 0; i < usersss.length; i++)
    {
      if(usersss[i].id==id)
        {
        return usersss[i]
      }
    }
    return[]
  }
  save(): void {
   // this.LoginUser = JSON.parse(this.LoginUser)
   
   this.curentUSer3=JSON.parse(localStorage.getItem('currentUser')!);

    let newemail=this.EditForm.value.Email;
    let newFullname=this.EditForm.value.Fullname;
    
    for (let i = 0; i < this.users.length; i++)
    {
     if (this.users[i].id == this.editId.id) 
     {
       this.users[i].Fullname = newFullname;
       this.users[i].Email = newemail;
       break;
     }  
   }
   if(this.curentUSer3[0].id==this.editId.id)
     {
      this.curentUSer3[1].Name=newFullname;
      this.curentUSer3[2].Email=newemail;
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentUser',JSON.stringify(this.curentUSer3))
     }
    for(let i=0 ; i<this.datafromChatStorage.length ; i++)
    {
      if(this.datafromChatStorage[i].id == this.urlid)
      {
        this.datafromChatStorage[i].userName = this.EditForm.value.Fullname;
      }
    } 
    localStorage.removeItem('ChatStorage');
    localStorage.setItem('ChatStorage',JSON.stringify(this.datafromChatStorage));
    localStorage.removeItem('usersStorage');
    localStorage.setItem('usersStorage', JSON.stringify(this.users));
    this.router.navigate(['/users-management']);  
  }
}
