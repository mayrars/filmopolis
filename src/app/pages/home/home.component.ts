import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe } from '@angular/common';
import { Movie } from '../../models/movie.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private _moviesService = inject(MoviesService);
  topMovies: Movie[] = [];
  ngOnInit(): void {
    this._moviesService.getTopMovies().subscribe(data=>{
      this.topMovies = data.results;
    })
  }
}
