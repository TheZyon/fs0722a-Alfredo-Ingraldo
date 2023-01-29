import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


import { Friendship, IUser, Like, LikeUser, Notification, Post} from '../models/IUser.model';
import { Observable, catchError, tap, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DaoService {

  private usersCollection : AngularFirestoreCollection<IUser>;

  private postsCollection: AngularFirestoreCollection<Post>;

  private friendshipsCollection: AngularFirestoreCollection<Friendship>;

  private userLikesCollection: AngularFirestoreCollection<LikeUser>;

  private likesCollection: AngularFirestoreCollection<Like>;

  private notificationsCollection: AngularFirestoreCollection<Notification>;

  constructor(private db: AngularFirestore) {
    this.usersCollection = db.collection<IUser>('users');
    this.postsCollection = db.collection<Post>('posts');
    this.friendshipsCollection = db.collection<Friendship>('friendships');
    this.userLikesCollection = db.collection<LikeUser>('userLikes');
    this.likesCollection = db.collection<Like>('likeCollection');
    this.notificationsCollection = db.collection<Notification>('notifications');
  }



//CREATE

  async createUser(user: IUser) {// creates/updates user document in users collection
    return this.usersCollection.doc(user.id).set({
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age
   }).catch(err => { console.log("Error in DAO service in createUser: ", err)});

  }

  async createPost(post: Post) {
    return this.postsCollection.add({
      title: post.title,
      body: post.body,
      idAuthor: post.idAuthor
    }).catch(err => { console.log("Error in DAO service in createPost: ", err)});
  }

  async createFriendship(idUser1: string, idUser2: string) { 
    let friendship1= this.friendshipsCollection.add({
      idUser1: idUser1,
      idUser2: idUser2
    }).catch(err => { console.log("Error in DAO service in createFriendship - 1: ", err) });
    
    let friendship2 = this.friendshipsCollection.add({
      idUser1: idUser2,
      idUser2: idUser1
    }).catch(err => { console.log("Error in DAO service in createFriendship - 2: ", err) });
    
    return [friendship1, friendship2];
  }

  async createLikeUser(idUser1: string, idUser2: string) { 
    return this.userLikesCollection.add({
      idUser1: idUser1,
      idUser2: idUser2
    }).catch(err => { console.log("Error in DAO service in createLikeUser: ", err) });
  }

  async createLike(idUser: string, idPost: string) {
  
  
  
    this.likesCollection.add({
      idUser: idUser,
      idPost: idPost
    }).then(res => { //devo mandare la notifica

      this.getUserById(idUser).subscribe(res => {
        
        let nameLiker = res.data()?.name; //il nome di chi ha messo il like
        this.getPostById(idPost).subscribe(res => {
          let idLikedUser = res.data()?.idAuthor;
          if(idLikedUser) this.createNotification(idLikedUser, `${nameLiker} liked a post of yours!`)
        })
      }
      )
    })
        .catch(err => { console.log("Error in DAO service in createLike: ", err) });

  }



  async createNotification(idUser: string, text: string) { 
    return this.notificationsCollection.add({
      idUser: idUser,
      text: text
    }).catch(err => { console.log("Error in DAO service in createNotification: ", err) });
  }

  //RETRIEVE

  getUserById(id: string) {
    return this.usersCollection.doc(id).get()
    .pipe(catchError((err) => { console.log(err); throw err; }));

  };

  getPostById(id: string) { 
    return this.postsCollection.doc(id).get()
    .pipe(catchError((err) => { console.log(err); throw err; }));
  }

  getAllUsers() {

    return this.usersCollection.get().pipe(catchError((err) => { console.log(err); throw err; }));
  }

  getAllNotifications() { 
    return this.notificationsCollection.get().pipe(catchError((err) => { console.log(err); throw err; }));
  }
  /* getPostByAuthorId(id:string) {

    return this.db.collection('posts', ref => ref.where('idAuthor', '==', id)) //è ref che ha i metodi per fare la query
            .get();
  }
 */

  getAllPosts() {
    return this.postsCollection.get().pipe(catchError((err) => { console.log(err); throw err; }));
  }

  getAllLikes() { 
    return this.likesCollection.get().pipe(catchError((err) => { console.log(err); throw err; }));
  }

  getAllUserLikes() { 
    return this.userLikesCollection.get().pipe(catchError((err) => { console.log(err); throw err; }));
  }

  //UPDATE

  updatePostById(id: string, post:Post) {
    return this.postsCollection.doc(id).set(post).catch(err => {console.log(err);})
  }




  //DELETE

  deletePostById(id: string) {
    return this.postsCollection.doc(id).delete().catch(err => { console.log(err)})
  }

  deleteLikeById(id: string) { 
    return this.likesCollection.doc(id).delete().catch(err => { console.log(err)})
  }

  deleteUserById(id: string) { 
    return this.userLikesCollection.doc(id).delete().catch(err => { console.log(err)})
  }

}
