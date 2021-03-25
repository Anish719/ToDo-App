import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth-guard.service';
import { ToDoComponent } from './to-do/to-do.component';
import { EditProfileComponent } from './user/my-profile/edit-profile/edit-profile.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'/signin', pathMatch :'full'},
  {path: 'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'to-do', canActivate: [AuthGuard] ,component:ToDoComponent},
  //{path: 'to-do', component:ToDoComponent}
  {path: 'profile', canActivate: [AuthGuard], component:MyProfileComponent},
  {path: 'edit-profile', canActivate: [AuthGuard], component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
