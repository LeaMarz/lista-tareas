import { Component } from '@angular/core';
import { Task } from '../Task';
import { TASK } from '../mock-task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
tasks: Task[] = TASK;
}
