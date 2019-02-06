import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Task } from './../models/tasks.model';
import * as TaskActions from './../actions/tasks.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  addTask(name, description, count, author) {
    this.store.dispatch(new TaskActions.AddTask({name: name, description: description, count: count, author: author}) );
  }
  ngOnInit() {
  }

}
