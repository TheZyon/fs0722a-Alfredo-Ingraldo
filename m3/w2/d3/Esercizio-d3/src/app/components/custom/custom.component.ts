import { Component, OnInit , Input, Output} from '@angular/core';
import { Post } from 'src/app/interface/post';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() post!: Post;

  @Output() onChangeActive = new EventEmitter<Post>();


  constructor() { }

  ngOnInit(): void {
  }

  changeActive(): void {
    console.log("cambio di active");
    if (this.post.active) { this.post.active = false; } else { this.post.active = true; }
    this.onChangeActive.emit(this.post);
  }
}
