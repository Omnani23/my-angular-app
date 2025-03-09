import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  movies = [
    {
      id: 1,
      title: 'Avengers: Endgame',
      genre: 'Action/Sci-Fi',
      image: 'assets/images/movies/avengers.jpg'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      genre: 'Action/Drama',
      image: 'assets/images/movies/dark-knight.jpg'
    },
    {
      id: 3,
      title: 'Inception',
      genre: 'Sci-Fi/Action',
      image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/inception-et00004499-24-03-2017-02-34-49.jpg'
    },
    {
      id: 4,
      title: 'Interstellar',
      genre: 'Sci-Fi/Drama',
      image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/interstellar-et00019066-19-05-2016-12-09-15.jpg'
    }
  ];

  events = [
    {
      id: 1,
      title: 'Music Festival 2024',
      venue: 'Central Park Arena',
      price: '999',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00384053-pbhqsqrxvs-portrait.jpg'
    },
    {
      id: 2,
      title: 'Comedy Night',
      venue: 'Laugh Factory',
      price: '499',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00384055-vxfmqjdwyl-portrait.jpg'
    },
    {
      id: 3,
      title: 'Rock Concert',
      venue: 'Stadium Arena',
      price: '1499',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00384054-ktzzmxqsuy-portrait.jpg'
    }
  ];

  streams = [
    {
      id: 1,
      title: 'Gaming Championship',
      viewers: '15.2K',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00384056-pdqbkfsnaq-portrait.jpg'
    },
    {
      id: 2,
      title: 'Music Live Stream',
      viewers: '8.5K',
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00384057-qkrxfxqpkt-portrait.jpg'
    }
  ];

  constructor(private router: Router) {}

  selectMovie(movie: any) {
    this.router.navigate(['/theaters', movie.id]);
  }

  selectEvent(event: any) {
    this.router.navigate(['/theaters', event.id]);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}