import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit{
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Input() categoryId: any;
  @Output() OnClick: EventEmitter<number> = new EventEmitter();

  totalPages = 0
  pages:any = []
  ngOnInit(): void {
    if(this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)
    }
  }
  pageClicked(page: number){
    if(page<=this.totalPages && page>=1)
      this.OnClick.emit(page)
  }
}
