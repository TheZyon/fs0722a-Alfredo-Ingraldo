import { Component, OnInit } from '@angular/core';
import { PhotosService } from './service/photos.service';
import { Subscription } from 'rxjs';
import { Album } from './interface/album';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio';

  albumArray: Album[] = [];

  sub!: Subscription;

  constructor(private photoSrv: PhotosService) { }


  ngOnInit() {

    this.recuperaAlbum();
  }

  recuperaAlbum() {
    this.sub = this.photoSrv.get().subscribe(ris => {

      this.albumArray = ris.filter(album => { return album.id < 100; }); //prendo solo i primi 100 album nella component
      console.log("ecco l'albumArray: ", this.albumArray);
    });
  }

  cancellaAlbum(id: number) {
    this.sub = this.photoSrv.delete(id).subscribe(
      ris => {
        console.log(ris);
        this.albumArray = this.albumArray?.filter(album => { return album.id != id });
      }
    )
  }


  ngOnDestroy():void {
    this.sub.unsubscribe();
  }


}
