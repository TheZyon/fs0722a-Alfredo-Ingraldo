import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Favorite {
  id:number,
  userId: number,
  movieId:number
 }

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  url = 'http://localhost:4201';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(this.url+'/movies-popular').pipe(catchError(err => { console.log("error in get movies"); throw err; }));
  }
  getFavorites() {
    return this.http.get<Favorite[]>(this.url+ '/favorites').pipe(catchError(err => { console.log("error in get favorites"); throw err; }));
  }


  postFavorite(fav:Partial<Favorite>) {
    return this.http.post<Favorite>(this.url + '/favorites', fav).pipe(catchError(err => { console.log("error in post favorite"); throw err; }));
  }

  deliteFavorite(idFav: number) {
    return this.http.delete(this.url+'/favorites'+`/${idFav}`).pipe(catchError(err => { console.log("error in delete favorite"); throw err; }));
  }

}
