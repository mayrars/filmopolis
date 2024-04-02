import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  moviesList:Movie[] = [];
  category:string = '';
  totalPages?: number;
  currentPage:number=0;
  itemsPerPage:number=20;
  totalResults: number = 0;
  urlImg: string = environment.imgUrl
  private _moviesService = inject(MoviesService);
  private _router = inject(ActivatedRoute);
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._moviesService.getMovies(params['id']).subscribe(data=>{
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
        this.totalResults = data.total_results;
        console.log(this.totalResults);
        this.moviesList = data.results;
      })
    })
  }
}
