import { Action } from '@ngrx/store';
import { Task } from './../models/tasks.model';
import * as TaskActions from './../actions/tasks.actions';

// Section 1
const initialState: Task = {
    name: 'Making India Awesome',
    description: 'Love your country?Want to make it truly great?Tired of loud debates and complex arguments which lead to no solutions?',
    count : 1,
    author: 'chetan'
  };
const initialStateincompletetask: Task = {
    name: 'Half Girlfriend',
    description: 'A simple and inspiring love story of a boy called Madhav who doesn’t speak English well',
    count : 1,
    author: 'bhagat'

  };
// Section 2
export function reducer(state: Task[] = [initialState, initialStateincompletetask], action: TaskActions.Actions) {

    // Section 3
    switch (action.type) {
        case TaskActions.ADD_TASK:
            return [...state, action.payload];
         case TaskActions.REMOVE_TASK:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
