import { Component, OnInit, NgModule } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  arrayTodo: Todo[] = [];
  nuovoTodo: Todo = {id:-1, title:'', completed:false};

  caricati: boolean = false;

  papiri: number = 0;

  constructor(private todoSrv: TodoService) {

  }

  ngOnInit(): void { //carica arrayTodo da todoSrv e dopo 2s rende var caricati true
    this.arrayTodo = this.todoSrv.retrieveTodos().filter(todo => { return todo.completed == false; });
    setTimeout(() => { this.caricati = true; this.papiri = this.todoSrv.n_papiri; }, 2000);
    /*    setTimeout(() => { console.log(this.caricati) }, 3000); */

  }

  pushaTodo() {//pusha il todo dell'ìnput tag in arrayTodo e nella base dati di todoSrv

    setTimeout(() => {
      let id=this.newId(this.todoSrv.todosArray) /* aggiustare in modo che gli id siano tutti diversi */
      let todoTemp: Todo = { id: id, title: this.nuovoTodo.title, completed: false }
      this.arrayTodo.push(todoTemp);
      this.todoSrv.createTodo(todoTemp)

      /*  this.nuovoTodo.completed = false;
      this.arrayTodo.push(this.nuovoTodo);
      this.todoSrv.todosArray.push(this.nuovoTodo); */
      console.log("array del service: ", this.todoSrv.todosArray);
      console.log("array del component: ", this.arrayTodo);
    }, 2000);

  }

  taskCompleted(id: number) {
    setTimeout(() => {
      this.todoSrv.update(id); //rendo il task completed nell'array del service
      console.log("array del service: ", this.todoSrv.todosArray);
      this.arrayTodo = this.arrayTodo.filter(todo => { return todo.id != id });//tolgo il task dall'array del component
      console.log("array del component: ", this.arrayTodo);
      let audio = new Audio("/assets/slurp_v.mp3");
      audio.play();
    }, 2000);

  }

//creazione id tutti diversi

  newId(array: Todo[]):number {
    if (array.length > 0) {
      let idArray: number[] = [];

      array.forEach(todo => { return idArray.push(todo.id); });

      return Math.max.apply(Math, idArray) + 1;
    }
    else { return 0; }

  }

  tagliaPapiro() {
    let audio = new Audio("/assets/axe.mp3");
    setTimeout(() => {
      console.log("play"); audio.play(); this.papiri += 1; this.todoSrv.n_papiri += 1;
    }, 2000);
  }


}
