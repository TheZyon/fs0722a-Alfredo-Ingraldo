import { Component, OnInit, Output,EventEmitter } from '@angular/core'; //output eventemitter servono per trasferire l'evento
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit {

  newName = 'new namme wa guagliu';
  newSurname = '';
  newEta = 0;

  constructor() { }


  @Output() onManCreated = new EventEmitter<User>(); //

  @Output() onWomanCreated = new EventEmitter<User>();

  ngOnInit(): void {
  }

  onAddMan() {
    this.onManCreated.emit({name:this.newName, surname: this.newSurname, sex: 'uomo', eta: this.newEta})
  }

  onAddWoman() {
    this.onWomanCreated.emit({name:this.newName, surname: this.newSurname, sex: 'donna', eta: this.newEta})
  }
}

//i due metodi creeranno gli event emitter che tireranno furoi un oggetto impacchettato come è fatta l'interfaccia, e tale oggetto sarà ricevuto da userCard
