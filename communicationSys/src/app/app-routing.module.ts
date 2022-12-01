import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsManagementComponent } from './docs-management/docs-management.component';
import { EditComponent } from './edit/edit.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginSuccesfulComponent } from './login-succesful/login-succesful.component';
import { LoginComponent } from './login/login.component';
import { RegisterSuccesfulComponent } from './register-succesful/register-succesful.component';
import { RegisterComponent } from './register/register.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: 'users-management', component: UsersManagementComponent
  },
  {
    path: 'docs-management', component: DocsManagementComponent
  },
  {
    path: 'group-chat', component: GroupChatComponent
  },
  {
    path: 'logout', component: LogOutComponent
  },
  {
    path: 'edit/:id', component: EditComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login-succesful', component: LoginSuccesfulComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'register-succesful', component: RegisterSuccesfulComponent
  },
  {
    path: 'users-management/:id', component: UsersManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
