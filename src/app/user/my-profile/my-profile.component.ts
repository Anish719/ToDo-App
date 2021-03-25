import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let currentUser = this.userService.getUser(this.userService.loggedInUser());

    this.firstName = currentUser.firstName;
    this.lastName = currentUser.lastName;
    this.username = currentUser.username;
    this.gender = currentUser.gender;
    this.address = currentUser.address;
    this.profileImage = currentUser.profileImage;

  }

  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  address: string;
  profileImage: string | ArrayBuffer;

}
