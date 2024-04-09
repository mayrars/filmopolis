import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CardComponent } from '../../components/card/card.component';
import { CardSkeletonComponent } from '../../components/card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [PaginationComponent,RouterLink,CardComponent, CardSkeletonComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  moviesList:Movie[] = [];
  category:string = '';
  categoryId:string = '';
  totalPages?: number;
  currentPage:number=1;
  itemsPerPage:number=20;
  totalResults: number = 0;
  urlImg: string = environment.imgUrl
  private _apiService = inject(ApiService);
  private _router = inject(ActivatedRoute);
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this.categoryId = params['id'];
      this._apiService.getMovies(params['id'],1).subscribe(data=>{
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
        this.moviesList = data.results;
      })
    })
  }
  changePage(page:number){
    this._apiService.getMovies(this.categoryId,page).subscribe(data=>{
      this.currentPage = data.page;
      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;
      this.moviesList = data.results;
    })
  }
}
