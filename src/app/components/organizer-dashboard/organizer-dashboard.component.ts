import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-organizer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './organizer-dashboard.component.html',
  styleUrls: ['./organizer-dashboard.component.css']
})
export class OrganizerDashboardComponent {
  selectedEventType: 'movie' | 'concert' = 'movie';
  movieTitle: string = '';
  selectedTheater: string = '';
  selectedVenue: string = '';
  concertName: string = '';

  theaters = [
    { id: '1', name: 'PVR Cinemas', location: 'Downtown Mall' },
    { id: '2', name: 'INOX', location: 'City Center' },
    { id: '3', name: 'Cinepolis', location: 'Metro Mall' }
  ];

  venues = [
    { id: '1', name: 'Stadium Arena', capacity: 5000 },
    { id: '2', name: 'Convention Center', capacity: 3000 },
    { id: '3', name: 'Open Air Theater', capacity: 8000 }
  ];

  availableTimes = [
    '10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'
  ];

  passes = [
    { type: 'VIP', enabled: false, price: 0, quantity: 0 },
    { type: 'Gold', enabled: false, price: 0, quantity: 0 },
    { type: 'Silver', enabled: false, price: 0, quantity: 0 },
    { type: 'General', enabled: false, price: 0, quantity: 0 }
  ];

  selectedTimes: string[] = [];

  constructor(private router: Router) {}

  toggleTimeSlot(time: string) {
    const index = this.selectedTimes.indexOf(time);
    if (index === -1) {
      this.selectedTimes.push(time);
    } else {
      this.selectedTimes.splice(index, 1);
    }
  }

  onSubmitMovie() {
    console.log('Movie Event Created', {
      title: this.movieTitle,
      theater: this.selectedTheater,
      times: this.selectedTimes
    });
  }

  onSubmitConcert() {
    console.log('Concert Event Created', {
      name: this.concertName,
      venue: this.selectedVenue,
      passes: this.passes.filter(pass => pass.enabled)
    });
  }

  navigateToProfile() {
    // Navigate to organizer profile page
    console.log('Navigating to organizer profile');
  }
}