import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient)
  private baseUrl = environment.apiUrl
  constructor() {}
  //Trending series and movies
  getTrendingNow():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    };
    return this.http.get(`${this.baseUrl}trending/all/week`,httpOptions)
  }
  
  //Trendig Movies
  getTrendingMovies():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}trending/movie/day`,httpOptions)
  }

  //Get Movies
  getMovies():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`{this.baseUrl}movie/popular`, httpOptions)
  }
  //Get categories
  getCategories():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}genre/movie/list`, httpOptions)
  }
}