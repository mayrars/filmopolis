import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
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
  private _apiService = inject(ApiService);
  topTrending: Movie[] = [];
  popularMovies: Movie[] = [];
  urlImg: string = environment.imgUrl
  ngOnInit(): void {
    this._apiService.getPopularMovies().subscribe((data)=>{
      this.popularMovies = data.results.slice(0,8)
    })
    this._apiService.getTrendingNow().subscribe(data=>{
      this.topTrending = data.results.slice(0,8)
    })
  }
}
