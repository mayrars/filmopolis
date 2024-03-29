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
  getPopularMovies():Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${environment.apiKey}`)
    };
    return this.http.get(`${this.baseUrl}movie/popular`,httpOptions)
  }
}
