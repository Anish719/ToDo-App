import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './user/signup/signup.component';
import { AuthGuard } from './authentication/auth-guard.service';
import { AuthService } from './authentication/auth.service';
import { ToDoComponent } from './to-do/to-do.component';
import { StorageService } from './services/storage.service';
import { HeaderComponent } from './header/header.component';
import { UserService } from './services/user.service';
import { FilterPipe } from './pipes/filter.pipe';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { EditProfileComponent } from './user/my-profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    ToDoComponent,
    HeaderComponent,
    FilterPipe,
    MyProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, StorageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
