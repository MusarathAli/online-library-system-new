import { Action } from '@ngrx/store';
import { CompletedTask } from './../models/tasks.model';
import * as CompletedTaskActions from './../actions/completedtasks.actions';

// Section 1
const initialState: CompletedTask = {
    name: 'learn angular services',
    description: 'http://google.com',
    count : 1,
    author: 'maxman'
  };
const initialStateincompletetask: CompletedTask = {
    name: 'learn angular services',
    description: 'http://google.com',
    count : 1,
    author: 'maxman'

  };
// Section 2
export function reducer(state: CompletedTask[] = [initialState, initialStateincompletetask], action: CompletedTaskActions.Actions) {

    // Section 3
    switch (action.type) {
        case CompletedTaskActions.COMPLETED_TASK:
            return [...state, action.payload];
            default:
            return state;
    }
}
