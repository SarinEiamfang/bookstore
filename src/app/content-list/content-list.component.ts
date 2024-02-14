import { CommonModule } from '@angular/common';//////////////////////
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'//////////////

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],//////////////
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
    @Input () bookItems: Content[] = []; 
  
    ngOnInit():void {
      this.bookItems = [
      {
        id: 1,
        title: "Book A",
        description: "description of book a",
        author: "creator of book a",
        cover: ["Hardcover"],
        price: 10
      },
      {
        id: 2,
        title: "Book B",
        description: "description of book b",
        author: "creator of book b",
        cover: ["Softcover"],
        price: 7
      },
      {
        id: 3,
        title: "Book c",
        description: "description of book c",
        author: "creator of book c",
        cover: ["Softcover"],
        price: 5
      }
    ]
  }
}
