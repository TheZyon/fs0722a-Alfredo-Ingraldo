import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DaoService } from 'src/app/dao/dao.service';
import { IUser } from 'src/app/models/IUser.model';

@Component({
  selector: 'app-carousel-likes',
  templateUrl: './carousel-likes.component.html',
  styleUrls: ['./carousel-likes.component.scss']
})
export class CarouselLikesComponent implements OnInit {

  selected: number = 0;

  constructor(private dao: DaoService, private authSrv: AuthService) { }

  iUsersArray: IUser[]=[]; //array degli IUser di tutti gli utenti

  subUsers!: Subscription;

  idLoggedUser: string = 'GesùGiuseppeEMaria';

  ngOnInit(): void {
  
    this.authSrv.obsUser.subscribe(res => { 
      if (res) {
        this.idLoggedUser = res.info.id;
      this.getAllUsers(); 
   }
      
    })

    

  
  }

  ngOnDestroy() { 
    this.subUsers.unsubscribe();
  }



  getAllUsers() { //makes a subscription and uses it to populate iUsersArray

    this.subUsers=this.dao.getAllUsers().subscribe(
      res => {
        res.docs.forEach(doc => {
          this.iUsersArray.push(
            <IUser>{
              name: doc.data().name,
              age: doc.data().age,
              id: doc.id,
              email: doc.data().email
            })
        })
        console.log(this.iUsersArray)

      }
    )


  }

  prevCard() { 
    if(this.selected > 0){ this.selected -= 1;}
    
  }

  liked(idUser:string) { 
    this.selected += 1;
    //aggiungere funzionalità di like
    this.dao.createLikeUser(this.idLoggedUser, idUser);

  }

  rejected(idUser:string) { 
    this.selected += 1;
    //aggiungere funzionalit rejected
  }

  superLiked(idUser:string) {
    this.selected += 1;
    //aggiungere funzionalità superLiked
   }
}
