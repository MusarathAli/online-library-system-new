import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromTasks from './tasks.reducer';
import * as fromcompletedtasks from './completedtasks.reducer';
import { environment } from '../../environments/environment';
import { Compltedtask } from '../actions/completedtasks.actions';
import * as fromRoot from '../reducers';

export interface State {
//tasks: fromTasks.State;
//completedtasks: fromcompletedtasks.State;
}

export const reducers: ActionReducerMap<State> = {
  tasks: fromTasks.reducer,
  completedtasks: fromcompletedtasks.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
