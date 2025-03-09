import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action/Sci-Fi',
      image: 'assets/images/movies/avengers.jpg',
      rating: '9.0',
      language: 'English'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      genre: 'Action/Drama',
      image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-dark-knight-et00019386-24-03-2017-02-11-46.jpg',
      rating: '9.2',
      language: 'English'
    },
    {
      id: 3,
      title: 'Inception',
      genre: 'Sci-Fi/Action',
      image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/inception-et00004499-24-03-2017-02-34-49.jpg',
      rating: '8.8',
      language: 'English'
    },
    {
      id: 4,
      title: 'Interstellar',
      genre: 'Sci-Fi/Drama',
      image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/interstellar-et00019066-19-05-2016-12-09-15.jpg',
      rating: '8.9',
      language: 'English'
    }
  ];

  constructor(private router: Router) {}

  selectMovie(movie: any) {
    this.router.navigate(['/theaters', movie.id]);
  }
}