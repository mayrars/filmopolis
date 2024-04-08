import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient)
  private baseUrl = environment.apiUrl
  constructor() {}
  //More rated
  getTrendingNow():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    };
    return this.http.get(`${this.baseUrl}movie/top_rated?`,httpOptions)
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

  //Get popular Movies
  getPopularMovies():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}movie/popular`, httpOptions)
  }
  //Get movies with parameters
  getMovies(genre?:string, page?:number):Observable<any>{
    const genreId = genre ? `&with_genres=${genre}` : ''
    const pageNumber = page ? `&page=${page}` : '1'      
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}discover/movie?include_adult=false${genreId}${pageNumber}`, httpOptions)
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
  getMovie(movieId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}movie/${movieId}`, httpOptions)
  }
  getCredits(movieId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}movie/${movieId}/credits`, httpOptions)
  }
  getSimilar(movieId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}movie/${movieId}/similar`, httpOptions)
  }
  getVideos(movieId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}movie/${movieId}/videos`, httpOptions)
  }
}