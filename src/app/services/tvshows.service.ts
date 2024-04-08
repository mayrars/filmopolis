import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private http = inject(HttpClient)
  private baseUrl = environment.apiUrl
  constructor() {}

  //Get categories
  getCategories():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}genre/tv/list`, httpOptions)
  }
  //Get show with parameters
  getShows(genre?:string, page?:number):Observable<any>{
    const genreId = genre ? `&with_genres=${genre}` : ''
    const pageNumber = page ? `&page=${page}` : '1'      
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}discover/tv?include_adult=false${genreId}${pageNumber}`, httpOptions)
  }
  getShow(movieId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}tv/${movieId}`, httpOptions)
  }
  getCredits(showId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}tv/${showId}/credits`, httpOptions)
  }
  getImages(showId: number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    }
    return this.http.get(`${this.baseUrl}tv/${showId}/images`, httpOptions)
  }

}
