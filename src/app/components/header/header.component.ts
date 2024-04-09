import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Categorie } from '../../models/category.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private _apiService = inject(ApiService);
  categories: Categorie[] = [];
  tvcategories: Categorie[] = [];
  ngOnInit(): void {
    this._apiService.getCategories().subscribe(data=>{
      this.categories = data.genres
    })
    this._apiService.getTvCategories().subscribe(data=>{
      this.tvcategories = data.genres
    })
  }
}
