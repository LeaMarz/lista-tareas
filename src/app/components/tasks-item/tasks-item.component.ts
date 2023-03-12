import { Component , Input,OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from '../Task';
import { TASK } from '../mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task: Task= TASK[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes=faTimes;
  ngOnInit():void {} 
  onDelete(task : Task){
    this.onDeleteTask.emit(task)
  }  
}
