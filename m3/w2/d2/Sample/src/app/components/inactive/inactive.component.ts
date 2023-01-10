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
    this.postSrv.fetchaPosts()
      .then((arrayCoiPost: Post[]) => {
        this.arrayPostInattivi = arrayCoiPost.filter(post => { return post.active == false; });
        console.log(this.arrayPostInattivi)
      })
  }

}
