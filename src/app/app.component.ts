import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private movieService: MovieService) {
    this.movieService.topRated()
      .subscribe((data: any) => {
        console.log(data);
      }, (err) => {
        console.error('Mensaje de error: ', err.message)
      });
  }

}
