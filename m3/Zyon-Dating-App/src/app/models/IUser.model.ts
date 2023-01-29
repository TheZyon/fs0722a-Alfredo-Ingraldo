export interface IUser {
  name: string,
  email: string,
  age: number,
  id: string,
  sex?: string,
  hobbies?: string[],
  bio?:string
}

export interface User {


  token: string;

  info: {
    id: string,
    email: string,
    name: string,
    age: number,
    sex?: string,
    hobbies?: string[],
    bio?:string
  }


}

export interface Post {
  id?:string,
  title: string,
  body: string,
  idAuthor: string
}

export interface Like {
  id?:string,
  idUser: string,
  idPost: string
}

export interface Friendship {
  id?:string,
  idUser1: string,
  idUser2:string
}


export interface LikeUser { 
  id?:string,
  idUser1: string,
  idUser2:string
}

export interface Notification { 
  
  id?: string,
  idUser: string,
  text:string
}