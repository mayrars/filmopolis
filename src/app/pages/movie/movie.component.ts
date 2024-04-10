import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { Person } from '../../models/person.model';
import { CurrencyPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, CurrencyPipe,CardComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private _apiService = inject(ApiService);
  private _router = inject(ActivatedRoute);
  urlImg: string = environment.imgUrl
  movie?:Movie
  actors?:Person[]
  videos?:any[]
  similarMovies?:Movie[]
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      const id = params['id'];
      this._apiService.getMovie(id).subscribe((data:Movie) => {
        this.movie = data;
      })
      this._apiService.getCredits(id).subscribe((data:any) => {
        this.actors = data.cast.slice(0,8);
      })
      this._apiService.getVideos(id).subscribe((data:any) => {        
        if(data.results.length > 0){
          this.videos = data.results
        }
      })
      this._apiService.getSimilar(id).subscribe((data:any) => {
        this.similarMovies = data.results.slice(0,6);
      })
    })
  }
}

