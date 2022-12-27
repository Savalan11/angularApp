import { Injectable } from '@angular/core';

//this means that this component is available in all components of the project
@Injectable(
  //providedIn: 'root'
)

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: "Pro Angular",
        author: "Adam Freeman",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41r7+TqeYsL._SY344_BO1,204,203,200_.jpg",
        amount: 15,
      },
      {
        name: "Advanced Guides to Master C#",
        author: "Mark Reed",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41tKWuKfTsL._SX348_BO1,204,203,200_.jpg",
        amount: 25,
    
      },
      {
        name: "Advanced Guides to Master C#",
        author: "Mark Reed",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41tKWuKfTsL._SX348_BO1,204,203,200_.jpg",
        amount: 25,
    
      },
      {
        name: "Advanced Guides to Master C#",
        author: "Mark Reed",
        image: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41tKWuKfTsL._SX348_BO1,204,203,200_.jpg",
        amount: 25,
    
      },
    
    ];
  }
}

// class Name {
//   constructor(name: string) {

//   }
// }
