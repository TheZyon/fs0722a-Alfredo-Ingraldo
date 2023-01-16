import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../interface/album';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }


  get() {
    return this.http.get< Album[] >('https://jsonplaceholder.typicode.com/photos');
  }

/*   post(newUser: Partial<Album>) {
  //Partial --->non vengono mandati tutti i dati, quelli che non arrivano vengono valorizzati vuoti

    return this.http.post<Album>('https://reqres.in/api/users', newUser);
  }
*/
  delete(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }


  
}
