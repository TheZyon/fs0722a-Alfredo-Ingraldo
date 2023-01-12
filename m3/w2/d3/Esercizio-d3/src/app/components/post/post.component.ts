import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() id!: number;
  @Input() title!: string;
  @Input() body!: string;
  @Input() type!: string;

  @Output() buttonClicked= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitId() {
    console.log("emetto", this.id);
    this.buttonClicked.emit(this.id);
  }
}
