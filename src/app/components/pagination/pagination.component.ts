import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit{
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;

  totalPages = 0
  pages:any = []
  ngOnInit(): void {
    console.log("Total",this.totalItems)
    if(this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)
    }
  }
}
