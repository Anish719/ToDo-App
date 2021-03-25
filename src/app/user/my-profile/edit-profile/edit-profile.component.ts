import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  imageUpload: FileList;

  ngOnInit(): void {

    let currentUser = this.userService.getUser(this.userService.loggedInUser());

    this.firstName = currentUser.firstName;
    this.lastName = currentUser.lastName;
    this.password = currentUser.password;
    this.gender = currentUser.gender;
    this.address = currentUser.address;

    console.log(this.gender);

  }

  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  address: string;
  profileImage: any;

  onUploadImage(event) {
    this.imageUpload = event.target.files;
    this.profileImage = this.imageUpload;
  }

  onSubmit() {
    this.userService.updateUserProfile(this.firstName, this.lastName, this.password, this.gender, this.address, this.profileImage);

    this.router.navigate(['/to-do'])
  }

}
