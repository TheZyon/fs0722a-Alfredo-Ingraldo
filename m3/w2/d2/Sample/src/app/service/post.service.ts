import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  fetchaPosts() { //ritorna una promise che contiene l'array dei posts
    let arrayPromise = fetch("/assets/db.json").then(response => { return response.json(); });
    console.log("è stato chiamato il service", arrayPromise);
    return arrayPromise;
  }
}
