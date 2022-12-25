import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  addToCard(){
    console.log('asdf');
  }
  
books: Book[] = [
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

card: Book[] = [];

isShowing: boolean = true;

  constructor () { }

  ngOnInit(): void {
   
}

}