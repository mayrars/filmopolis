import { Component, inject, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() movie?: Movie;
  urlImg: string = environment.imgUrl
  ngOnInit(): void {
  }
}
