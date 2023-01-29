import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {


  @Output() back = new EventEmitter();
  @Output() like = new EventEmitter();
  @Output() superLike = new EventEmitter();
  @Output() reject = new EventEmitter();

  @Input() selected!: number ;

  constructor() { }

  ngOnInit(): void {
  }

  backToggle() { 
    this.back.emit();
  }
  likeToggle() { 
    this.like.emit();
  }
  superLikeToggle() { 
    this.superLike.emit();
  }
  rejectToggle() { 
    this.reject.emit();
  }



}
