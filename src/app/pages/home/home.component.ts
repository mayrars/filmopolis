import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private _moviesService = inject(MoviesService);
  topTrending: Movie[] = [];
  topMovies: Movie[] = [];
  urlImg: string = environment.imgUrl
  ngOnInit(): void {
    this._moviesService.getTrendingMovies().subscribe(data=>{
      this.topMovies = data.results;
    })
    this._moviesService.getTrendingNow().subscribe(data=>{
      this.topTrending = data.results;
    })
  }
}
