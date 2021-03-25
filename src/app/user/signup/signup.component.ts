import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  imageUpload: FileList;

  ngOnInit(): void {
  }

  @ViewChild('f') form: NgForm;


  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    
    let firstName: any = this.form.value.firstName;
    let lastName: any = this.form.value.lastName;
    let username: any = this.form.value.username;
    let password: any = this.form.value.password;
    let gender: any = this.form.value.gender;
    let address: any = this.form.value.address;
    let profileImage: any = this.imageUpload;
    
    this.userService.storeNewUser(firstName, lastName, username, password, gender, address, profileImage);

    alert('Thank you for login!! Please Signin to create To Do List');

    this.router.navigate(['/signin']);

  }

  onUploadImage(event){
    this.imageUpload = event.target.files;
  }

}
