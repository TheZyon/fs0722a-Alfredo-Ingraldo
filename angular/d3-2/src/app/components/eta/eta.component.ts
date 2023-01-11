import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.scss']
})
export class EtaComponent implements OnInit {

  @Input() eta!: number;
  @Output() etaChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.eta++;
    this.etaChange.emit(this.eta);
    //tramite il two way data binding dell'html, inizialmente eta è 0, poi quando si attiva add()
    // aumento eta, e attivo l'event emitter che butta fuori il nuovo valore di eta, che grazie al two way data binding viene mandata al html
  }
}
