import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Book } from '../types/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  addToCard() {
    this.bookEmitter.emit(this.book);
  }
  // Sending data from Parent to child Component
  @Input() book: Book = {} as Book;

  // Sending data from child component to parent Component
  @Output() bookEmitter = new EventEmitter<Book>();


  constructor () { }

  ngOnInit(): void {

   

  }

}

