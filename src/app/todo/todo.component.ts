import { Component, OnInit } from '@angular/core';

import { ITodo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todoList : ITodo[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTodo(todo : String){
    this.todoList.push({
      id : Date.now(),
      name : todo,
      status : false
    })
  }

  udpateTodo(todoId : Number, status:Boolean){
    this.todoList.forEach((todo) => {
      if(todo.id == todoId){
        todo.status = status;
      }
    })
  }

}
