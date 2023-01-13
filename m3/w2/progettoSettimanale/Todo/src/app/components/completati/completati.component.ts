import { Component, OnInit, NgModule } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  arrayTodo: Todo[] = [];
  nuovoTodo: Todo = {id:-1, title:'inserisci todo', completed:false};

  caricati: boolean = false;

  constructor(private todoSrv: TodoService) {

  }

  ngOnInit(): void { //carica arrayTodo da todoSrv e dopo 2s rende var caricati true
    this.arrayTodo= this.todoSrv.retrieveTodos().filter(todo => { return todo.completed == true; })
    setTimeout(() => { this.caricati = true; }, 2000);
 /*    setTimeout(() => { console.log(this.caricati) }, 3000); */
  }

  /* aggiungere metodo per rimuovere definitivamente il todo */

  removeTodo(id:number) {
    this.todoSrv.deleteTodo(id);
    this.arrayTodo = this.arrayTodo.filter(todo => { return todo.id != id; });
  }
}

