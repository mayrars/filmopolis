import { Component, inject, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { Show } from '../../models/tvshows.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() movie?: Movie;
  @Input() show?: Show;
  urlImg: string = environment.imgUrl
  ngOnInit(): void {
    
  }
}
