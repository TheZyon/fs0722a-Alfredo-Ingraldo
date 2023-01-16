import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { LikesService } from 'src/app/service/likes.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {



  @Input() id!: number;
  @Input() title!:string;
  @Input() url!: string;



  constructor(private likesSrv:LikesService) { }

  ngOnInit(): void {
  }


  like() {
    this.likesSrv.likes.next(1);
  }
}
