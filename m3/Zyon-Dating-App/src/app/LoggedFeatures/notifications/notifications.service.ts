import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DaoService } from 'src/app/dao/dao.service';
import { Notification } from 'src/app/models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notify$ = new BehaviorSubject<Notification>({id: "33", text:"coviddi", idUser:"giova33"})

  notObs = this.notify$.asObservable();

  constructor(private dao: DaoService) { }

  notification(n: Notification) { 
    this.notify$.next(n);
  }

  
  
}
