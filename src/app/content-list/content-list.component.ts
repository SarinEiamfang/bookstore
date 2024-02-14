import { CommonModule } from '@angular/common';///////////////////add commonmodule
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'/////////////add coontent
import { ContentCardComponent } from '../content-card/content-card.component'; ///////add contentCard component
import { ContentFilterPipe } from '../content-filter.pipe';///////////////
import { FormsModule } from '@angular/forms';//////////////////////

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentFilterPipe, FormsModule],//////////////
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
    @Input () bookItems: Content[] = []; 
  ///arrays
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
        title: "Book C",
        description: "description of book c",
        author: "creator of book c",
        cover: ["Softcover"],
        price: 5
      }
    ];
  }


 searchContent: string = '';
      contentExists: boolean = false;
      searchString: string = '';
      

      checkContentExists() {
        // Implement your logic to check if the content exists based on the search term
        const contentExists = this.bookItems.some(bookItem =>
          Object.values(this.bookItems).some(value =>
            (value && typeof value === 'string' && value.toLowerCase() === this.searchContent.toLowerCase()) ||
            (Array.isArray(value) && typeof value[0] === 'string' && value[0].toLowerCase() === this.searchContent.toLowerCase())
          )

        );

        this.contentExists = contentExists;
        this.searchString = contentExists ? 'Content exists!' : 'Content does not exist.';
      }
}
