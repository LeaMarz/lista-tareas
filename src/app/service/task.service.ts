import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http'
import { TASK } from '../components/mock-task';
import { Task } from '../components/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5003/task'

  constructor(
    private http:HttpClient 
  ) {}
     
  getTasks(): Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl)
  }
}
