import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task, CompletedTask } from './../models/tasks.model';
import { AppState } from './../app.state';
import * as TaskActions from './../actions/tasks.actions';
import {NgForm} from '@angular/forms';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  todotasks: Observable<Task[]>;
  completedtasks: Observable<CompletedTask[]>;
  searchedBook: any = '';
  filteredbook: any[] = [];
  searchbuttonclicked: boolean = false;

  constructor(private store: Store<AppState>) {
    this.todotasks = store.select('task');
    this.completedtasks = store.select('completedtask');
  }
  delTutorial(index) {
    this.store.dispatch(new TaskActions.RemoveTask(index));
  }
  serachBook() {
    if (this.searchedBook !== '') {
      this.todotasks.subscribe(val => {
        this.searchbuttonclicked = true;
        this.filteredbook = this.filterbooks(val);
      }
        );
    }
 
  }
  filterbooks(value) {
    const obj = value.find(item => item.name === this.searchedBook); 
    return obj;
  }

  ngOnInit() {
  }

}
