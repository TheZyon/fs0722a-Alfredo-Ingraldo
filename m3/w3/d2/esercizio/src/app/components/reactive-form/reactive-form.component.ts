import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {



  eroiForm!: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.eroiForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      alterEgo: new FormControl(null, [Validators.required]),
      planet: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      enemy: new FormControl(null, Validators.maxLength(10)),
      weakness: new FormControl(null),
      powers: new FormControl(null, [Validators.required])
    })
    console.log("iniziale: ", this.eroiForm)
  }



  onSubmit() {
    console.log(this.eroiForm);
    }
}
