import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { Actor } from '../../models/actor.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private _moviesService = inject(MoviesService);
  private _router = inject(ActivatedRoute);
  urlImg: string = environment.imgUrl
  movie?:Movie
  actors?:Actor[]

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      const id = params['id'];
      this._moviesService.getMovie(id).subscribe((data:Movie) => {
        this.movie = data;
      })
      this._moviesService.getCredits(id).subscribe((data:any) => {
        this.actors = data.cast;
      })
    })
  }
}

