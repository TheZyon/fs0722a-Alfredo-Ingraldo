import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id: number = -1;
  body!: string;
  title!: string;
  active!: boolean;
  type!: string;
  author!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.body = this.route.snapshot.params['body'];
    this.title = this.route.snapshot.params['title'];
    this.active = this.route.snapshot.params['active'];
    this.type = this.route.snapshot.params['type'];
    this.author = this.route.snapshot.params['author'];
  }

}
