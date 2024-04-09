import { Component, inject, OnInit } from '@angular/core';
import { Show } from '../../models/tvshows.model';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardComponent } from '../../components/card/card.component';
import { CardSkeletonComponent } from '../../components/card-skeleton/card-skeleton.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tvshow-categories',
  standalone: true,
  imports: [PaginationComponent, CardComponent, CardSkeletonComponent],
  templateUrl: './tvshow-category.component.html',
  styleUrl: './tvshow-category.component.css'
})
export class TvshowCategoryComponent implements OnInit{
  showsList:Show[] = [];
  urlImg: string = environment.imgUrl
  private _apiService = inject(ApiService);
  private _router = inject(ActivatedRoute);
  category:string = '';
  categoryId:string = '';
  totalPages?: number;
  currentPage:number=1;
  itemsPerPage:number=20;
  totalResults: number = 0;
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this.categoryId = params['id'];
      this._apiService.getShows(params['id'],1).subscribe(data=>{
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
        this.showsList = data.results;
      })
    })
  }
  changePage(page:number){
    this._apiService.getShows(this.categoryId,page).subscribe(data=>{
      this.currentPage = data.page;
      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;
      this.showsList = data.results;
    })
  }
}
