import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
  GetNameFromLocalStorage: any;
  curentUSer2:any;
  curentUSer:any;
  curentUSerid:any;
  editUserUrl = Number(this.route.snapshot.paramMap.get('id'));
  urlid:any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.curentUSer2 = JSON.parse(localStorage.getItem('currentUser')!);
    if (this.curentUSer2 == null) {
      this.router.navigate(['/welcome']);
    }
    this.GetNameFromLocalStorage = JSON.parse(localStorage.getItem('usersStorage')!);
    this.curentUSer=JSON.parse(localStorage.getItem('currentUser')!);
    this.curentUSerid=this.curentUSer[0].id;
  }
  delete(id:number)
  {
    this.urlid=id;
  }
  deleteUser():any
  {  
   for(let i=0 ; i<this.GetNameFromLocalStorage.length ; i++)
   {
    if(this.GetNameFromLocalStorage[i].id== this.urlid)
    {
     this.GetNameFromLocalStorage.splice(i,1);
    }
   localStorage.removeItem('usersStorage') 
   localStorage.setItem('usersStorage',JSON.stringify(this.GetNameFromLocalStorage));
   }
  }
  
}

