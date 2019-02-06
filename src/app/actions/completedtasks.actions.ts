import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { CompletedTask } from '../models/tasks.model';

// Section 2
export const COMPLETED_TASK = '[TASK] Add';

// Section 3
export class Compltedtask implements Action {
    readonly type = COMPLETED_TASK;

    constructor(public payload: CompletedTask) {}
}


// Section 4
export type Actions = Compltedtask;
