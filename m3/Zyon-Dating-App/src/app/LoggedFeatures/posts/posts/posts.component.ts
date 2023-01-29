import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DaoService } from 'src/app/dao/dao.service';
import { IUser, Like, Post, User } from 'src/app/models/IUser.model';
import { YourPageService } from '../your-page.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private authSrv: AuthService, private dao: DaoService, private route: ActivatedRoute, private yourPageSrv: YourPageService) { }

  //teniamo conto dell'utente loggato e dell'utente cui appartene la bakeka

  //subscriptions we make

  subSelectedUser!: Subscription;
  subLoggedUser!: Subscription;
  subPosts!: Subscription;
  subLikes!: Subscription;

  user: IUser | null = {

    id: 'laMadonninaEVergineTuLoSaiBattiLeMani',
    email: 'sangiuseppe@gmail.com',
    name: 'Mr Craig',
    age: 2050

  }

  yourPageNewClick: boolean = false;


  selectedUserIsLoggedUser: boolean = false; //dice se l'utente loggato coincide con l'utente cui appartiene questa pagina
  selectedUserId: string = '';
  loggedUserId: string = '';



  //array dei post pubblicati dall'utente selezionato
  postArrayUser: Post[] = [];
  
  //array di tutti i  likes fatti ai post dell'utente selezionato, da parte di qualunque utente
  likesArray: Like[] = [];

  ngOnInit(): void { 
    //0. getting SELECTED USER ID from the route snapshot
    //1. subscription to get info SELECTED USER -> assigning it to variable "user"
    //2. subscription to get id LOGGED USER -> assigning it to "loggedUserId"
    //3. subscription to get the POSTS of the selected user -> assigning them to variable "postArrayUser"
    //4. subscription to get the LIKES of the posts of the selected user -> assigning them to variable "likesArray"
    
    //0.
    this.selectedUserId = this.route.snapshot.params['id']; 
    
    //1.
    this.subSelectedUser = this.dao.getUserById(this.selectedUserId).subscribe(res => {
      let data = res.data();
      this.user = {
        id: this.selectedUserId,
        name: data!.name,
        email: data!.email,
        age: data!.age
      }

      //2.
      this.subLoggedUser = this.authSrv.obsUser.subscribe(res => {
        this.loggedUserId = res!.info.id;

        this.selectedUserIsLoggedUser = (this.loggedUserId == this.selectedUserId);

      }

      );

      //3.
      this.loadUserPosts();

      //4.
      this.loadLikes();
    })

  }

  ngDoCheck() {
    //se l'url non contiene l'id dell'utente loggato, ricarica la pagina
    //serve per far funzionare il passaggio diretto dalla bakeka di un utente alla propria bakeka
    //senza doevr passare per un'altra componente (le bakeke sono fatte tutte con la stessa componente
    //collegata a diversi url quindi al passaggio da una bakeka all'altra non si attiva ngOnInit())

    if (this.route.snapshot.params['id'] != this.selectedUserId) {
      console.error("selected user id i different from route id")
      this.refreshComponent()
    }
  }

  loadUserPosts() {
    // 0. sottoscrizione a this.dao.getAllPosts()
    // 1. resetta postArrayUser a []
    // 2. pusha in postArrayUser i post dell'utente attualemnte nel DB



    //0.
    this.subPosts = this.dao.getAllPosts().subscribe(res => {

      //1.
      this.postArrayUser = [];

      //3.
      let docsUser = res.docs.filter(doc => {
        return doc.data().idAuthor == this.user?.id
      });

      docsUser.forEach(doc => {


        this.postArrayUser.push({
          title: doc.data().title,
          body: doc.data().body,
          idAuthor: doc.data().idAuthor,
          id: doc.id
        });
      });

      /* console.log("array post user: ", this.postArrayUser); */


    });



  }

  loadLikes() {
    // 0. sottoscrizione a this.dao.getAllLikes()
    // 1. resetta postLikes a []
    // 2. pusha in postLikes i likes relativi a post dell'utente utente attualmente nel DB

 
      //0.
      this.subLikes = this.dao.getAllLikes().subscribe(res => {

      //1.
      this.likesArray = [];
      this.postArrayUser.forEach(post => { 
        res.docs.forEach(like => { 
          if (like.data().idPost == post.id)
            this.likesArray.push({
              idPost: like.data().idPost,
              idUser: like.data().idUser,
              id: like.id});
        } )
      })
  
    })
  }

  numberOfLikesOfPost(post:Post) { 
    return this.likesArray.filter(like => { return like.idPost == post.id; }).length;
  }

  refreshComponent() {
    this.ngOnDestroy();
    this.ngOnInit();
  }

  ngOnDestroy() {

    this.subLoggedUser.unsubscribe();
    this.subSelectedUser.unsubscribe();
    this.subPosts.unsubscribe();
    this.subLikes.unsubscribe();

  }

  //CRUD Operations methods for the posts

  updatePost(f: NgForm, i: number) {//modifica un post nel DB e aggiorna i post visualizzati dall'utente

    //1. usa indice i del post nell'arrayPostUser per risalire all'id del post
    //2. update del db
    //3. reset subscription posts per avere visualizzazione dell'utente (perché?)


    let newVersion: Post = {
      id: this.postArrayUser[i].id,
      idAuthor: this.user!.id,
      title: f.value.title,
      body: f.value.body
    }

    //1.
    let id = this.postArrayUser[i].id;
    /* console.log("l'id: ", id);*/

    if (id) {
      this.dao.updatePostById(id, newVersion) //2.
        .then(res => {/* this.resetSubscriptionPosts() */ this.refreshComponent(); }); //3.
    }
    else { console.log("post id not found during update!!")}


  }

  createPost(f: NgForm) { //crea un nuovo post con le info del NgForm f

    let newPost = <Post>{
      title: f.value.title,
      body: f.value.body,
      idAuthor: this.user?.id
    }

    this.dao.createPost(newPost).then(
      resp => { /* this.resetSubscriptionPosts(); */
        this.refreshComponent();
}
    );

  }

  deletePostById(post:Post) {
    let id = post.id;
    if (id) {
      this.dao.deletePostById(id);
      /* this.resetSubscriptionPosts(); */
      this.refreshComponent();
    }
    else { console.error("id non trovato")}
  }

  like(post: Post) { 
    // 1. verifico se l'utente loggato ha già messo un like al tale post, e metto il tale like in un array

    // 2. se non c'è aggiungo il like
    // 3. se c'è lo tolgo
    
    //1. 
    let likesToThisPostByLoggedUser = this.likesArray.filter(like => { return like.idUser == this.loggedUserId }).filter(like => {
      { return like.idPost == post.id }
    });

    if (likesToThisPostByLoggedUser.length==0) { // 2.
     
      if (post.id) this.dao.createLike(this.loggedUserId, post.id).then(res => {
        this.refreshComponent();
      });
    }
    else { //3. 
      let id = likesToThisPostByLoggedUser[0].id;
      if (id) {
        this.dao.deleteLikeById(id);
        this.refreshComponent();
      }
      else { console.log("id of like not found in like()"); }
      
    }
    
  }
  
  comment(post:Post, comment: string) { 

  }

  /* resetSubscriptionPosts() { //resetta la sottoscrizione per i post del DB
    this.subPosts.unsubscribe();
    this.loadUserPosts();
  //se non tolgo e rimetto la sottoscrizione non si aggiorna postArrayUser, come mai?
  }*/

}
