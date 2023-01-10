import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})

export class ActiveComponent implements OnInit {

   arrayPostAttivi!: Post[];

  constructor(private postSrv: PostService) {} /* dependency injection->come mai private arantisce una dependency injection? */

  ngOnInit(): void {
    this.popolaArrayPostAttivi();
  }

  popolaArrayPostAttivi() {//recupera la promise con l'array dei post dal service e mette i post attivi nel field arrayPostAttivi
    this.postSrv.fetchaPosts()
      .then((arrayPost: Post[]) => {
        return arrayPost.filter(post => { return post.active == true; });
      }
      )
      .then(e => { this.arrayPostAttivi = e });

  }

}
