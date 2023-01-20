import { Component, OnInit } from '@angular/core';
import { Favorite, Movie, MoviesService } from '../movies.service';
import { AuthService } from 'src/app/auth/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  userId: number = -1;

  movies: Movie[] = [];

  favoritesUser: Favorite[] = [];


  urlPopular = this.movieSrv.url + '/movies-popular'; //url per i movies-popular

  constructor(private movieSrv:MoviesService, private authSrv: AuthService) { }

  ngOnInit(): void {

    //prendo i movies
    this.movieSrv.getMovies().subscribe(res => { return this.movies = res; })

    /* //prendo id utente
      this.authSrv.user$
      .pipe(catchError(err => { console.log("error in subject user next"); throw err; }))
      .subscribe(user => {
        if (user?.user.id) { this.userId = user?.user.id }
        else {console.log("id non trovato nel recuperare next di user") }
      });

    //prendo i favorites dell'utente
    this.movieSrv.getFavorites().subscribe(res => {
      console.log("getting favorites: ", res);
      console.log("id utente: ", this.userId);
      return this.favorites = res.filter(fav => {
        return fav.userId == this.userId });
    }) */

    //prendo i favorites dell'utente loggato
    this.getFavoritesUser();

  }






  getFavoritesUser() { //recupera l'array favoritesUser dei preferiti dell'utente e lo mette in favoritesUser
    this.authSrv.user$
    .pipe(catchError(err => { console.log("error in subject user next"); throw err; }))
    .subscribe(user => {
      if (user?.user.id) {

        this.userId = user?.user.id;

        let id = user?.user.id;

        this.movieSrv.getFavorites().subscribe(res => {
          console.log("All favorites: ", res);
          console.log("id utente: ", id);

          this.favoritesUser = res.filter(fav => { return fav.userId == id });
          console.log("favoritesUser: ", this.favoritesUser);
        });
       }
      else {console.log("id non trovato nel recuperare next di user") }
    });
  }

  isItLiked(movieId: number):boolean { //verifica se un tale movie è tra i preferiti dell'utente

    let intersection = this.favoritesUser.filter(fav => { return fav.movieId == movieId });
    if (intersection.length > 0) { return true; }
    return false;

  }

  likeToggle(movieId:number) {

    let isLiked:boolean = this.isItLiked(movieId);

    if (isLiked) { //il movie era tra i favorites


      let idFav = this.favoritesUser.filter(fav => { return fav.movieId == movieId })[0].id; //id del favorite associato al movie, esiste sempre perché isItLiked ha ritornato true


      this.movieSrv.deliteFavorite(idFav).subscribe(res => {
        console.log("delete: ", res);
        this.getFavoritesUser();

      })


    }
    else { //non era tra i favorites


      this.movieSrv.postFavorite({ movieId: movieId, userId: this.userId })
        .subscribe(res => {

          console.log("posted: ", res);
          this.getFavoritesUser(); //aggiorno i favoritesUser

        }

      );


    }

  }
}
