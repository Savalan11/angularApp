import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

name: string = "Pro Angular";
author: string = "Adam Freeman";
src: string = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41r7+TqeYsL._SY344_BO1,204,203,200_.jpg";

name2: string = "Advanced Guides to Master C#";
author2: string = "Mark Reed";
src2: string = "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41tKWuKfTsL._SX348_BO1,204,203,200_.jpg";


  constructor () { }

  ngOnInit(): void {

}

}