import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Categorie } from '../../models/category.model';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ListResultsComponent } from '../list-results/list-results.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgClass, ListResultsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  searchForm!: FormGroup
  private _apiService = inject(ApiService);
  categories: Categorie[] = [];
  tvcategories: Categorie[] = [];
  listResults: any[] = [];
  hiddenResults: boolean = true;
  constructor(private formBuilder: FormBuilder){
    this.searchForm = this.formBuilder.group({
      title: ['',[Validators.required,Validators.minLength(3)]]
    })
  }
  ngOnInit(): void {
    this._apiService.getCategories().subscribe(data=>{
      this.categories = data.genres
    })
    this._apiService.getTvCategories().subscribe(data=>{
      this.tvcategories = data.genres
    })
  }
  hasErrors(controlName: string,errorType: string){
    return this.searchForm.get(controlName)?.hasError(errorType) && this.searchForm.get(controlName)?.touched
  }
  searchByTitle(event:any){
    const value = event.target.value;
    this._apiService.getByTitle(value).subscribe((data:any)=>{
      this.listResults = data.results;
      this.hiddenResults = false
    })
  }
}
