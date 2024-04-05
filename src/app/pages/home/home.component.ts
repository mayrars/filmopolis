import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe,RouterLink,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private _moviesService = inject(MoviesService);
  topTrending: Movie[] = [];
  popularMovies: Movie[] = [];
  urlImg: string = environment.imgUrl
  ngOnInit(): void {
    this._moviesService.getPopularMovies().subscribe((data)=>{
      this.popularMovies = data.results.slice(0,8)
    })
    this._moviesService.getTrendingNow().subscribe(data=>{
      this.topTrending = data.results.slice(0,8)
    })
  }
}
