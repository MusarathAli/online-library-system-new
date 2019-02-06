import { Task, CompletedTask} from './models/tasks.model';

export interface AppState {
  readonly task: Task[];
  readonly completedtask: CompletedTask[];
}
