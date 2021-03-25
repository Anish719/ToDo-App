import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from '../to-do/to-do.model';
import { User } from '../user/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService, private router: Router) { }

  storeNewUser(firstName: any, lastName: any, username: any, password: any, gender: any, address: any, profileImage: any) {

    let fileReader = new FileReader();

    fileReader.readAsDataURL(profileImage[0])
    fileReader.onloadend = () => {
      let user = new User(firstName, lastName, username, password, gender, address, fileReader.result, []);
      this.storeUser(user);
    }
  }

  storeUser(user) {
    this.storageService.storeLData(user.username, JSON.stringify(user));
  }

  logoutUser() {
    sessionStorage.removeItem('username');
  }

  loggedInUser() {
    return sessionStorage.getItem('username');
  }

  loginUser(username, password) {
    let user = this.getUser(username)
    if (user && user.password === password) {
      this.storageService.storeSessionData('username', username);
      this.router.navigate(['/to-do'])
    } else {
      alert('Please Check if you entered username and password correctly')
    }
  }

  addToDoForUser(items: ToDoList[]) {
    let currentUser = this.getUser(this.loggedInUser());
    currentUser.todoList = items;

    this.storeUser(currentUser);
  }

  deleteToDOItem(items: ToDoList[]) {
    this.addToDoForUser(items);
  }

  updateToDOItem(items: ToDoList[]) {
    this.addToDoForUser(items);
  }

  getCurrentToDoList() {
    let currentUser = this.getUser(this.loggedInUser());

    return currentUser.todoList;
  }

  getUser(username) {
    let currentUser = JSON.parse(localStorage.getItem(username));
    return currentUser;
  }

  updateUserProfile(firstName: any, lastName: any, password: any, gender: any, address: any, profileImage: any) {

    console.log(profileImage);

    let currentUser = this.getUser(this.loggedInUser());

    if (firstName !== '') currentUser.firstName = firstName;
    if (lastName !== '') currentUser.lastName = lastName;
    if (password !== '') currentUser.password = password;
    if (gender !== '') currentUser.gender = gender;
    if (address !== '') currentUser.address = address;

    if (profileImage !== undefined) {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(profileImage[0])
      fileReader.onloadend = () => {
        currentUser.profileImage = fileReader.result;
        this.storeUser(currentUser);
      }
    } else {
      this.storeUser(currentUser);
    }
  }

}
