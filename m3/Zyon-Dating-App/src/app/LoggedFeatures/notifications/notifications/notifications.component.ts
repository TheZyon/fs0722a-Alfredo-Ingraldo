import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DaoModule } from 'src/app/dao/dao.module';
import { DaoService } from 'src/app/dao/dao.service';
import { Notification } from 'src/app/models/IUser.model';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificArray: Notification[] = [];
  idLoggedUser: string = '';

  subNotifications!: Subscription;

  constructor(private dao:DaoService, private auth: AuthService, private notSrv: NotificationsService) { }

  
  
  ngOnInit(): void {
    
    
    this.auth.obsUser.subscribe(user => { 
      if (user) { 
        this.idLoggedUser = user.info.id;
      }
      
      this.notSrv.notObs.subscribe(res => { 
        this.loadNotifications();
      }

      )
      this.loadNotifications();
    })



  }


  loadNotifications() { 
    this.notificArray = [];


    this.subNotifications=this.dao.getAllNotifications().subscribe(res => { 
     let  userDocs = res.docs.filter(not => { 
        return not.data().idUser == this.idLoggedUser;
     })
      
      
      userDocs.forEach(doc => {
        return this.notificArray.push({id: doc.id, text: doc.data().text, idUser: doc.data().idUser })
      })
    })
  }
}
