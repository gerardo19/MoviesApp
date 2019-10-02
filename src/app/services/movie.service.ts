import { Injectable } from '@angular/core';
import { JsonpClientBackend, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey: string = "5834a3a5bd35d0ca7646f9f8ed06d0fb";
  url: string = "https://api.themoviedb.org/3"

  constructor(private jsonp: JsonpClientBackend, private http: HttpClient) { }

  topRated(): Observable<any> {
    let url = `${this.url}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }
}
