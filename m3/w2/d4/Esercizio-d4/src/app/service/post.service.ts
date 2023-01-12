import { Injectable, OnInit} from '@angular/core';
import { Post } from '../interface/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrayPost: Post[] = [];

  constructor() {

    this.fetchaPosts();

  }





  fetchaPosts() { //aggiorna arrayPost con l'array fetchato
    console.log("fetcho")
    let arrayPromise = fetch("/assets/db.json").then(response => { return response.json(); })
      .then((resp: Post[]) => { return this.arrayPost = resp;});
  }

  updatePostById(id: number) {
    this.arrayPost[id].active = this.arrayPost[id].active ? false : true;
    console.log("aggiornamento, ora è: ", this.arrayPost[id].active);
   }

}
