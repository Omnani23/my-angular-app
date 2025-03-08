import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent {
  String = String; // Make String available in template

  seats = Array(8).fill(null).map((_, rowIndex) =>
    Array(12).fill(null).map((_, seatIndex) => ({
      number: seatIndex + 1,
      occupied: Math.random() > 0.7,
      selected: false
    }))
  );

  toggleSeat(seat: any) {
    if (!seat.occupied) {
      seat.selected = !seat.selected;
    }
  }

  hasSelectedSeats() {
    return this.seats.some(row => row.some(seat => seat.selected));
  }
}