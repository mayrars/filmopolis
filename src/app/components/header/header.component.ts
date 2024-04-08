import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Categorie } from '../../models/category.model';
import { RouterLink } from '@angular/router';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private _moviesService = inject(MoviesService);
  private _tvshowsService = inject(TvshowsService);
  categories: Categorie[] = [];
  tvcategories: Categorie[] = [];
  ngOnInit(): void {
    this._moviesService.getCategories().subscribe(data=>{
      this.categories = data.genres
    })
    this._tvshowsService.getCategories().subscribe(data=>{
      this.tvcategories = data.genres
    })
  }
}
