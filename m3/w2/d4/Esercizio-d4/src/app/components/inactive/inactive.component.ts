import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})

export class InactiveComponent implements OnInit {

  arrayPostInattivi!: Post[];
  constructor(private postSrv:PostService) { } //dependency injection --->perchè con private?

  ngOnInit(): void {
    this.popolaArrayPostInattivi();
  }

  popolaArrayPostInattivi() {//recupera la promise con l'array dei post dal service e mette i post attivi nel field arrayPostAttivi
    this.arrayPostInattivi = this.postSrv.arrayPost.filter(post => { return post.active == false });
  }


  aggiornaPost(id:number) {
    console.log("aggiorno arraPost del service...");
    this.postSrv.arrayPost.filter(post => { return post.id == id; })[0].active = true;// aggiorno arrayPost del service così la modifica resta letta per la sessione
    this.arrayPostInattivi = this.arrayPostInattivi.filter(post => { return post.id != id }); //aggiorno arrayPostAttivi così quando si ricarica la componente, i post caricati sono diversi
  }


}
