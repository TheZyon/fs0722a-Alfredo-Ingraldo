import { Component, OnInit } from '@angular/core';
import { LikesService } from 'src/app/service/likes.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  constructor(private likeSrv: LikesService) { }

  n_likes:number = 0;

  ngOnInit(): void {
    this.likeSrv.likes.subscribe(num => {
      { this.n_likes += num; console.log(num); }
    })
  }

}
