import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/interface/post';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //servono per passare info di q1uesta component ad un'altra component chiamata con il routing da questa
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})

export class ActiveComponent implements OnInit {

   arrayPostAttivi!: Post[];

  constructor(private postSrv: PostService) {} /* dependency injection->come mai private arantisce una dependency injection? */

  ngOnInit(): void {
    console.log("init--->popolo");
    this.popolaArrayPostAttivi();
  }

  popolaArrayPostAttivi() {//recupera la promise con l'array dei post dal service e mette i post attivi nel field arrayPostAttivi
    this.arrayPostAttivi = this.postSrv.arrayPost.filter(post => { return post.active == true });
  }

  aggiornaPost(id:number) {
    console.log("aggiorno arraPost del service...");
    this.postSrv.arrayPost.filter(post => { return post.id == id; })[0].active = false;// aggiorno arrayPost del service così la modifica resta letta per la sessione
    this.arrayPostAttivi = this.arrayPostAttivi.filter(post => { return post.id != id }); //aggiorno arrayPostAttivi così quando si ricarica la componente, i post caricati sono diversi
  }


}
