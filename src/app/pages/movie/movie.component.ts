import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private _moviesService = inject(MoviesService);
  private _router = inject(ActivatedRoute);
  movie?:Movie
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      const id = params['id'];
      this._moviesService.getMovie(id).subscribe((data:Movie) => {
        this.movie = data;
      })
    })
  }

}

