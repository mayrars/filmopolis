import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../models/movie.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent implements OnInit{
  private _apiService = inject(ApiService);
  private _router = inject(ActivatedRoute);
  movies: Movie[] = [];
  ngOnInit(): void {
    this._apiService.getUpcoming().subscribe((data: any) => {
      this.movies = data.results;
    })
  }
}
