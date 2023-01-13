import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosArray: Todo[] = [];
  n_papiri: number = 0; //numero papiri risparmiati per scrivere i task

  constructor() { }

  createTodo(todo:Todo) {//aggiunge un nuovo todo con dato titollo a todosArray
    this.todosArray.push(todo);
  }

  retrieveTodos(): Todo[] {

    return this.todosArray;
  }

  update(id: number) {//cambia field "completed" del todo di dato id

    let todo = this.todosArray.find(todo => { return todo.id == id });

    let completed = todo?.completed;

    if (todo != undefined) {

      this.todosArray[this.todosArray.indexOf(todo)].completed = completed ? false : true;
    }

    console.log("aggiornato: ", this.todosArray);

  }

  deleteTodo(id: number) {
    this.todosArray = this.todosArray.filter(todo => { return todo.id != id; });
  }

}
