import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/interface/hero';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild('eroiForm', {static: true}) form!: NgForm;

  heroArray: Hero[] = [];

  power: string = '';


  newHero: Hero = {
    name: '',
    alterEgo: '',
    planet: '',
    powers: [],
    enemy: '',
    weakness:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(form);

    console.log(this.newHero)

  }


}
