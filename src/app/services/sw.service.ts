import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwApiService {

  public getFilmes(): Observable<any> {
    return this.http.get(`https://swapi.dev/api/films/`);
  }
  public getPersonagens(): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/`);
  }
  constructor(private http: HttpClient) { }
}
