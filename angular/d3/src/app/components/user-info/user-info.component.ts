import { Component, Input, OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})


  //component per passare i dati alle card child


export class UserInfoComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() user: any; //riceve user da app-component



  constructor() { }

  ngOnInit(): void {
    console.log("on init");
}



  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges");
  }
  ngAfterContentChecked(): void {
      console.log("after content cheched")
  }
  ngAfterContentInit(): void {
     console.log("after content init")
  }
  ngAfterViewChecked(): void {
      console.log("after view cheched")
  }
  ngAfterViewInit(): void {
      console.log("after view init")
  }
  ngDoCheck(): void {
      console.log("do check")
  }
  ngOnDestroy(): void {
      console.log("on destroy")
  }
}
