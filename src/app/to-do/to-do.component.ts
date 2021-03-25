import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';
import { ToDoList } from './to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.items = this.userService.getCurrentToDoList();
    this.addButtonStatus = false;
  }

  public items: ToDoList[] = [];

  taskSerach = '';
  categorySerach = '';
  dateSearch: any;

  updateTaskValue: string ;
  updateCategoryValue: string ;
  updatePublicValue: string ;
  updateDateValue: Date;

  addButtonStatus: boolean ;

  public newTask: string;
  public category: string;
  public isPublic: string;
  public date: Date;

  public addToList() {
    if (this.newTask == '') {
    } else {

      let todoList = new ToDoList(this.newTask, this.category, this.isPublic, this.date, false);
      this.items.push(todoList);

      this.userService.addToDoForUser(this.items);

      this.newTask = '';
      this.category = '';
      this.isPublic = '';
      this.date = undefined;
      this.addButtonStatus = false;
    }
  }

  public addTaskButtonStatus(): boolean {
    console.log(this.isPublic)
      if (this.newTask !== '' && this.category !== '' && this.isPublic !== undefined && this.date !== undefined) {
        this.addButtonStatus = true;
        return this.addButtonStatus;
      } else {
        this.addButtonStatus = false;
      }
      return this.addButtonStatus;
  }

  public deleteTask(index) {
    this.items.splice(index, 1);

    this.userService.deleteToDOItem(this.items);
  }

  public editTask(index) {
    this.items[index]['editFlag'] = true;
  }

  public updateTask(index) {

    this.items[index]['editFlag'] = false;
    console.log(this.updateDateValue);
    if (this.updateTaskValue !== undefined) this.items[index]['task'] = this.updateTaskValue;
    if (this.updateCategoryValue !== undefined) this.items[index]['category'] = this.updateCategoryValue;
    if (this.updatePublicValue !== undefined) this.items[index]['isPublic'] = this.updatePublicValue;
    if (this.updateDateValue !== undefined) this.items[index]['date'] = this.updateDateValue;

    this.updateTaskValue = this.updateCategoryValue = this.updatePublicValue = this.updateDateValue = undefined;

    this.userService.updateToDOItem(this.items);
  }

  public clearFilter() {
    this.taskSerach = '';
    this.categorySerach = '';
    this.dateSearch = undefined;
  }

}
