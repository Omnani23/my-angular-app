import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theaters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent {
  theaters = [
    {
      id: 1,
      name: 'PVR Cinemas',
      location: 'Downtown Mall',
      showTimes: ['10:00 AM', '1:30 PM', '4:30 PM', '7:30 PM']
    },
    {
      id: 2,
      name: 'INOX',
      location: 'City Center',
      showTimes: ['11:00 AM', '2:30 PM', '5:30 PM', '8:30 PM']
    }
  ];

  constructor(private router: Router) {}

  selectTheater(theater: any) {
    this.router.navigate(['/seats', theater.id]);
  }
}